import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user:User;

  constructor(public user_service : UserService, private toastr: ToastrService){
    this.user = this.user_service.user
  }

  public sow_name(){
    console.log(this.user.name); 
  }

  public modify_data(new_name:string, new_last_name:string, new_email:string, new_photo:string){


   let name = new_name ? new_name : new_name = null;
   let las_name = new_last_name ? new_last_name : new_last_name = null;
   let email = new_email ? new_email : new_email = null;
   let photo = new_photo ? new_photo : new_photo = null;

   let editUser = new User(this.user_service.user.id_user, name, las_name, email, photo, this.user_service.user.password);
   console.log(editUser);
    
   this.user_service.editUser(editUser).subscribe((data:Respuesta)=>{
    
    if(data.info.affectedRows == 1){
      this.toastr.success('Uusaro modificado');
      
      this.user_service.login(this.user).subscribe((data:Respuesta)=>{
        this.user = data.result[0];
      })

    } else {
      this.toastr.error('ERROR: Usuaro no modificado')

    }
    
   })

    
  }


}
