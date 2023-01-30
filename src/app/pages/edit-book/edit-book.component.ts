import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  editBook:Book

  constructor(public book_service :BooksService){
   
  }

// mostrar libro
public getEditBook(idBook:string){
  let idB = parseInt(idBook)
  console.log(idB);
  
  this.editBook = this.book_service.getOne(idB)
}


// editarLibro
public edit_Book(editTitle:string, editType:string, editauthor:string, editprice:string, editphoto:string,idBook:string){

console.log(this.editBook.title);

let ePrice = parseInt(editprice);
let idB = parseInt(idBook)
 
// creamos un libro para pasarlo al servicio.
let newEditBook = new Book(editTitle,editType,editauthor,ePrice,editphoto,idB)

console.log('libro en vista *************');
console.log(newEditBook);

// enviamos el libro al servicio
this.book_service.editBook(newEditBook)

}
}
