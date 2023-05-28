import { Component, signal } from '@angular/core';
import { User } from '../../interfaces';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public user= signal<User> ({
    id:1,
    email:"tonovarela",
    first_name:"Tony",
    last_name:"Varela",
    avatar:"https://avatars.githubusercontent.com/u/1?v=3",


  });
  onFieldUpdated(field: keyof User, value: string) {


    this.user.update(current=>{
      return {
        ...current,
        [field]:value
      }
    })
    // this.user.mutate(current =>{
    //   switch(field){
    //     case "id":
    //       current.id = Number(value);
    //       break;        
    //     case "email":
    //       current.email = value;
    //       break;
    //     case "first_name":
    //       current.first_name = value;
    //       break;
    //     case "last_name":
    //       current.last_name = value;
    //       break;
    //     case "avatar":
    //       current.avatar = value;
    //       break;
    //     default:
    //       break;
    //   }
    // });
  //this.user.set({...this.user(),[field]: value});

    console.log({field, value});
  }

  

}
