import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; // para toast
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from '../../models/respuesta';
import { Router } from '@angular/router'; // para navigate

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userHijo:User;
  constructor(public user_service:UserService, private toastr: ToastrService, private router:Router){

  }

// METODOS

// COMUNICACION hijo-padre
public login(usuarioHijo:User){

  this.userHijo = usuarioHijo;
  // nos conectamos al servicio
  this.user_service.login(this.userHijo).subscribe((data:Respuesta)=>{
    
    if(data.error){
      this.toastr.error(`Usuario no encontrado`);
    } else {
      console.log(data);
    
      // cambiamos el valor de loged a true en el servicio para que se cambie el header
      this.user_service.logged = true;
      this.user_service.user = data.result[0]
      console.log(this.user_service.user);
      
      // redireccionamos a books
      this.router.navigate(['libros'])

    }
    
  });

  
  
}

}
