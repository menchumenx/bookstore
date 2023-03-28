import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';
import { BooleanLiteral } from 'typescript';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

public myBooks : Book[]

// creamos un atb con un objeto BooksService
  constructor(public book_Service: BooksService, private toastr: ToastrService, public user_service: UserService){

    this.myBooks = [];
    
    this.book_Service.getAll(this.user_service.user.id_user).subscribe((data:Respuesta) => {
        console.log(data.data);
        this.myBooks = data.data;
        this.book_Service.mybooks = data.data
    })
   
  }

// **************************
// MÉTODOS --------------
// **************************

//mostrar todos los libros desde service si el buscador esta vacío | SEARCH
public searchBooks(id_book:string){
console.log(id_book);

  if(id_book != '' || id_book != null){

    console.log(id_book);
    let id = parseInt(id_book)

    console.log(this.myBooks);
    
    const findBook = this.myBooks.filter(book => book.id_book == id);
    console.log(findBook);
    
    this.book_Service.getOne(findBook[0]).subscribe((data:Respuesta) => {
      if(data != undefined){

        console.log(data.data)
        this.myBooks = data.data

      } else {
        this.toastr.error(`El ID: ${id} no se encuentra`);
      }
    })
    
  } else {
      this.book_Service.getAll(this.user_service.user.id_user).subscribe((data:Respuesta) => {
        console.log(data.data);
        this.myBooks = data.data;
    })
  }
}


// eliminar libro COMUNICACIÓN HIJO-PADRE
public deleteBook(id_Book:number){
  
  console.log(id_Book);
  
  this.book_Service.deleteBook(id_Book, this.user_service.user.id_user).subscribe((data:Respuesta)  => {
    console.log(data.data);

    if(data.error){
      this.toastr.error(`ERROR: libro no eliminado`);
    } else{
      this.book_Service.getAll(this.user_service.user.id_user).subscribe((data:Respuesta) => {
        console.log(data.data);
        this.myBooks = data.data;
        this.book_Service.mybooks = data.data
      })
   }
})
}


}

