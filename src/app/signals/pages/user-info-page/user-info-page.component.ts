import { Component, OnInit, inject, signal } from '@angular/core';
import { UserService } from '../../services';
import { User } from '../../interfaces';


@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {
  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  loadUser(id: number) {
    if (id <= 0) {
      return;
    }
    this.userId.set(id);
    this.currentUser.set(undefined);
    this.usersService.getUserdById(id).subscribe(user=>{
      this.currentUser.set(user);
    })

  }

  private usersService = inject(UserService);
  public userId = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

}
