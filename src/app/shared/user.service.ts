import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public users :User[]
  constructor() { 
    this.users = [
      new User(1, 'Jose', 'Herrea','joseHerrera@jose.com','https://www.codenotch.com/wp-content/uploads/2021/12/profes-400x533.jpg','jose1234' ),
      new User(2, 'Menchu', 'Martin','menchumartin@menchu.com','https://www.codenotch.com/wp-content/uploads/2022/12/IMG_1272-1-2-400x538.jpg','menchu12341234' ),
    ]


  }


// metodos

// LOGIN
public login(loginUser:User):User{
  console.log('SERVICIO user vista *********************');
  console.log(loginUser.email);
  console.log(loginUser.password);
  
  
 let user = this.users.find((user) => (user.email == loginUser.email) && (user.password == loginUser.password))

 if (!user){
  console.log('usuario no encontrado');
  
 } else{
    console.log('user encontrado *********************');
    console.log(user);
    return user;
 }
 
}

// REGISTRO
public register(newUser: User):void{

  console.log('SERVICIO User RECIBIDO *********************');
  console.log(newUser);

  this.users.push(newUser);
  console.log('SERVICIO POST User *********************');
  console.log(this.users);
  
  
  
}

}
