import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public mybooks: Book[]
  public book: Book
  public id_user: number

  private url = 'http://localhost:3000/books'

  constructor( private http :HttpClient) {

    this.mybooks = []

   }

  // METODOS *************************

  // --> MOSTRAR TODOS LOS LIBROS
  getAll(id_user:number){ 
      return this.http.get(`${this.url}?id_user=${id_user}`)
    }

  // --> MOSTRAR UN LIBRO : ID_BOOK
  getOne(book:Book){
    return  this.http.get(`${this.url}?id_user=${book.id_user}&id_book=${book.id_book}`)
  }

  // --> AÑADIR UN LIBRO
  addBook(newBook:Book){
    return this.http.post(this.url, newBook)
  }

  // --> EDITAR UN LIBRO : ID_BOOK
  editBook(editBook:Book){
    return this.http.put(this.url, editBook)
  }
   
  // --> ELIMINAR UN LIBRO : ID_BOOK
  deleteBook(idBook:number, id_user:number){
  
    const httpOptions = {headers: null, body:{id_user: id_user, id_book: idBook}};
    return this.http.delete(this.url, httpOptions)

  }
}
