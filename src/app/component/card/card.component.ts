import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // comunicación Padre-Hijo
  @Input() bookPadre :Book; // Pasamos la información de los libros del padre al hijo
  @Input() botonPar :Boolean;  // pasamos la variable del padre para cambiar el color del boton en los pares
 
  // comunicación HIJO-PADRE
  // creamos un evento que evento asociado a un me´todo para pasar los datos al padre
  @Output() eventDeleteBook = new EventEmitter<Number> ();


  constructor(){
    
  }

  // HIJO-PADRE --> elimina el libro con una x en la card
  public deleteBook(idBook:number){

    console.log(idBook);
    // con esto enviamos al padre el id que estamos recogiendo del hijo.
    this.eventDeleteBook.emit(idBook)
    
  }
}
