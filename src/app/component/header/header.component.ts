import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public user_service : UserService, public router :Router ){}
  

  // logout
  public logout(){
    this.user_service.user = null;
    this.user_service.logged = false

    this.router.navigate([''])
  }
}
