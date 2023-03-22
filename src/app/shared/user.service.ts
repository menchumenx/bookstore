import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  private url = 'http://localhost:3000/';
  public loged : boolean;
  public user : User;

  constructor( private http: HttpClient) { }


// METHOS ***************************

// LOGIN
public login(loginUser:User){
  return this.http.post(`${this.url}login`, loginUser);
}

// REGISTRO
public register(newUser: User){
  return this.http.post(`${this.url}register`, newUser)
}

}
