import { Component } from '@angular/core';
import { find } from 'rxjs';
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
   
    this.editBook = new Book ('','','',0,'')
  }

// mostrar libro
public getEditBook(idBook:string){
  let idB = parseInt(idBook)
  console.log(idB);
  
  // comprobamos que el valos que recibimos del sertvicio no es undefined
  let findBook = this.book_service.getOne(idB) != undefined ?  this.editBook = this.book_service.getOne(idB) : console.log('no existe un libro con ese id');
  
  
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
