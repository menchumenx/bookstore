import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

 public book:string

  constructor(public book_Service:BooksService){

  }

    // Añadir libro
    public addBook(newtitle:string,newType:string,newAuthor:string, newPrice:string, newPhoto:string):any{

      let price = parseInt(newPrice)
      // Obtenemos un numero aleatorio que incluya los doa valores de mínimo y máximo para asignar a id_book
      let idB = Math.floor(Math.random()*(200 - 1 + 1) + 1)
      console.log(idB);
      
      let newBook = new Book(newtitle,newType,newAuthor, price,newPhoto,idB)
      console.log(newBook);

      this.book_Service.addBook(newBook).subscribe((data:Respuesta) => {
        console.log(data);
        
      })
      
    }
  
}
