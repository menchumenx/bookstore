import { Component } from '@angular/core';
import { find } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  editBook:Book
 

  constructor(public book_service :BooksService, private toastr: ToastrService, public user_service: UserService){
   
    this.editBook = new Book ('','','',0,'')
    
  }

// mostrar libro
public getEditBook(idBook:string){
  let idB = parseInt(idBook)
  console.log(idB);
  
  const finfBook = this.book_service.mybooks.filter(book => book.id_book == idB);
  console.log(finfBook);
  
  this.book_service.getOne(finfBook[0]).subscribe((data:Respuesta) => {
    console.log(data.data);
    // comprobamos que el valor que recibimos del sertvicio no es undefined
    if(data.data != undefined)
    {
      
      this.editBook = data.data[0];
      console.log(this.editBook);

      this.book_service.editBook(this.editBook).subscribe((data:Respuesta)=>{
        console.log(data);
        
      })
      
          

    } else {
      console.log(`No se ha encontrado libro con ID: ${idB}`);
      this.toastr.error(`No se ha encontrado libro con ID: ${idB}`);

    }
    
  })
  
}


// editarLibro
public edit_Book(editTitle:string, editType:string, editauthor:string, editprice:string, editphoto:string,idBook:string){

  let idB = idBook ? parseInt(idBook) : idBook = null;

  let title = editTitle ? editTitle : editTitle = null; 
  let type = editType ? editType : editType = null ;
  let author = editauthor ? editauthor : editauthor = null ;
  let price = editprice ? parseInt(editprice) : editprice = null ;
  let photo = editphoto ? editphoto : editphoto = null;
 
  this.editBook = new Book (title, type, author, price, photo, this.user_service.user.id_user, idB);
 
  console.log(this.editBook);
 
  this.book_service.editBook(this.editBook).subscribe((data:Respuesta)=>{
    console.log(data);
    this.toastr.success(`El libro se ha EDITADO CORRECTAMENTE`);
    
  })


  }
}
