import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userHijo:User;
  constructor(public user_service:UserService){

  }

// METODOS

// COMUNICACION hijo-padre
public login(usuarioHijo:User){
  console.log('componente PADRE***********');
  console.log(usuarioHijo);

  this.userHijo = usuarioHijo;
  
  // nos conectamos al servicio
  this.user_service.login(this.userHijo);

  
  
}

}
