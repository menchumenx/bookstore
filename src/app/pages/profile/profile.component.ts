import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user:User;

  constructor(){
    
    this.user= new User(1, 'Carmen', 'Martin','menchu.menchu@gmail.com','../../../assets/fotoPerfil.jpg','menchu1234')
  }

  public sow_name(){
    console.log(this.user.name); 
  }

  public modify_data(new_name:string, new_last_name:string, new_email:string, new_photo:string){

    console.log(this.user);

    this.user.name = new_name;
    this.user.last_name = new_last_name;
    this.user.email = new_email
    this.user.photo = new_photo

    console.log(this.user);
    
  }
}
