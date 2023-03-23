import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent {

  public userRgister: User;

  constructor(public user_service:UserService, private toastr: ToastrService, private router: Router){

  }


  // métodos

  // comunicación hijo_padre
  public registerPadre(userHijo:User){
    console.log('componente PADRE***********');
    console.log(userHijo);
  
    this.userRgister = userHijo;
    
    // nos conectamos al servicio
    this.user_service.register(this.userRgister).subscribe((data:Respuesta)=>{
      console.log(data);
      this.toastr.success(`Usuario REGISTRADO`);
      this.router.navigate(['login']) // la rura marcada en app-routing.module
      
    });
    }
}
