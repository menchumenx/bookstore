import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';
import { BooksComponent } from '../books/books.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

 public book:string

  constructor(public book_Service:BooksService, private toastr: ToastrService, public user_service:UserService){

  }

    // Añadir libro
    public addBook(newtitle:string,newType:string,newAuthor:string, newPrice:string, newPhoto:string):any{

      let price = parseInt(newPrice)
      
      let newBook = new Book(newtitle,newType,newAuthor, price,newPhoto, this.user_service.user.id_user )
      console.log(newBook);

      this.book_Service.addBook(newBook).subscribe((data:Respuesta) => {
        
        if(data.error){
          this.toastr.error(`ERROR: Libro no añadido`);
          console.log(data.message);
          
        } else{
          this.toastr.success(`El Libro ${newBook.title} se ha AÑADIDO`);
          console.log(data);
        }

      })
      
    }
  
}
