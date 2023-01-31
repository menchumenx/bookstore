import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  
  @Output () eventoLogin = new EventEmitter<User>();
  public vistaUser: User

  constructor(public user_service:UserService){
    this.vistaUser = new User()
  }

  // metodos

  public onSubmit(form:NgForm){

    console.log('datos ATRIB *********');
    console.log(this.vistaUser);
    
    this.eventoLogin.emit(this.vistaUser) // Para comunicación HIJO-PADRE
    //  this.user_service.login(this.vistaUser); --> si la comunicación se hace directamente con el servicio

    this.vistaUser.email =''; // liempia el input email
    this.vistaUser.password ='' // limpia el input password
    
  }

}
