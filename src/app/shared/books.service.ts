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

  private url = 'http://localhost:3000/books'

  constructor( private http :HttpClient) {

    this.mybooks = []

   }

  // METODOS *************************

  // --> MOSTRAR TODOS LOS LIBROS
  getAll(){ // no hay que indicar lo que revuelve ¿?
      return this.http.get(this.url)
    }

  // --> MOSTRAR UN LIBRO : ID_BOOK
  getOne(idbook:number){
    return  this.http.get(`${this.url}?idBook=${idbook}`)
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
  deleteBook(idBook:number){
  
    const httpOptions = {headers: null, body:{id_books: idBook}};
    return this.http.delete(this.url, httpOptions)

  }
}
