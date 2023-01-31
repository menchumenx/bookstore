import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public registroUser: User;

  // COMUNICACIÓN HIJO PADRE --> SALIDA DE INFORMACIÓN
  @Output() registroEvent = new EventEmitter<User> ();

  constructor(){
  
    this.registroUser = new User()
  }

  // metodos
  public register(form:NgForm){

    console.log(this.registroUser);

    // comunicacion HIJO-PADRE
    this.registroEvent.emit(this.registroUser)
    
    
  }

}
