import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services';
import { User } from '../../interfaces';


@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {

  private usersService = inject(UserService);
  public userId = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);
  public fullName = computed<string>(() => {
    if (!this.currentUser()) {
      return 'Usuario no enconttado';
    }

    
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name} `;
  });


  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  loadUser(id: number) {
    if (id <= 0) {
      return;
    }
    this.userId.set(id);
    this.currentUser.set(undefined);
    this.usersService.getUserdById(id)
    .subscribe(
    {
      next:(value)=>{
        this.currentUser.set(value);
        this.userWasFound.set(true);
      },
      error:( )=>{
        this.userWasFound.set(false);
        this.currentUser.set(undefined);
      }
    }
      

      
  
    )

  }


}
