import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public registroUser: User;

  // atrb para Form
  public registerForm: FormGroup;

  // COMUNICACIÓN HIJO PADRE --> SALIDA DE INFORMACIÓN
  @Output() registroEvent = new EventEmitter<User> ();

  constructor(private formBuilder: FormBuilder){
  
    this.registroUser = new User()
    this.buildForm()
  }

  // metodos

  //registro con Formulario Template Driven
  public register(form:NgForm){

    console.log(this.registroUser);

    // comunicacion HIJO-PADRE
    this.registroEvent.emit(this.registroUser)
    
  }

  //registro con Formulario Model Driven
  public registerModel(){
    const user = this.registerForm.value
    console.log(user);

     // comunicacion HIJO-PADRE
     this.registroEvent.emit(user)
    
  }

  private buildForm(){
    const passLenght = 8;

    this.registerForm = this.formBuilder.group({
      // el primer csampo es el valor que queramos que tenga por defecto, si no queremos que tenga se deja vacío. El sigiente campo son los validadores. En el caso que sea mas de uno iran contenidos en un array
      name: [,[ Validators.required]],
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(passLenght)]],
      confirmPassword: [, [Validators.required, this.checkPassword]]

    })

  }

  private checkPassword(control: AbstractControl){

    let res = {matchPassword:true}

    if(control.parent?.value.password == control.value) res = null

    return res
  }

}
