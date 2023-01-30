import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { BooleanLiteral } from 'typescript';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

public myBooks : Book[]

// creamos un atb con un objeto BooksService
  constructor(public book_Service: BooksService){

   this.myBooks = book_Service.getAll()
   
  }

// **************************
// MÉTODOS --------------
// **************************

//mostrar todos los libros desde service si el buscador esta vacío | SEARCH
public searchBooks(id_book:string){

  if(id_book != ''){

    console.log(id_book);
    let id = parseInt(id_book)

    this.myBooks = [this.book_Service.getOne(id)]
    console.log(this.book_Service.getOne(id));
    console.log(this.myBooks);
    
  } else {
    console.log(this.book_Service.getAll());
    this.myBooks = this.book_Service.getAll()
    }

}

// eliminar libro COMUNICACIÓN HIJO-PADRE
public deleteBook(id_Book:number){
  
  console.log(id_Book);
  this.book_Service.deleteBook(id_Book);

  this.myBooks = this.book_Service.getAll()
  console.log(this.myBooks);
  
}

}

