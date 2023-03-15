import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';
import { BooleanLiteral } from 'typescript';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

public myBooks : Book[]

// creamos un atb con un objeto BooksService
  constructor(public book_Service: BooksService, private toastr: ToastrService){

    this.myBooks = [];

    this.book_Service.getAll().subscribe((data:Respuesta) => {
        console.log(data.data);
        this.myBooks = data.data;
    })
   
  }

// **************************
// MÉTODOS --------------
// **************************

//mostrar todos los libros desde service si el buscador esta vacío | SEARCH
public searchBooks(id_book:string){

  if(id_book != ''){

    console.log(id_book);
    let id = parseInt(id_book)

    this.book_Service.getOne(id).subscribe((data:Respuesta) => {
      if(data != undefined){

        console.log(data.data)
        this.myBooks = data.data

      } else {
        this.toastr.error(`El ID: ${id} no se encuentra`);
      }
      
    })
    
  } else {
      this.book_Service.getAll().subscribe((data:Respuesta) => {
        console.log(data.data);
        this.myBooks = data.data;
    })
  }

}

// eliminar libro COMUNICACIÓN HIJO-PADRE
public deleteBook(id_Book:number){
  
  console.log(id_Book);
  
  this.book_Service.deleteBook(id_Book).subscribe((data:Respuesta)  => {
    console.log(data.data);
    this.myBooks = data.data
    
  })

}

}

