import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooleanLiteral } from 'typescript';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

book:string
myBooks : Book[]

  constructor(){

    this.myBooks = [
      new Book('Mi vecino Totoro','Manga','Miyazaki',7,'https://m.media-amazon.com/images/I/81UbyXk3DAL._SL1500_.jpg',1),
      new Book('El castillo Ambulante', 'Manga', 'Miyazaki', 15, 'https://img2.rtve.es/imagenes/portada-castillo-ambulante-corazon-pesada-carga/1593422086154.jpg',2),
      new Book('El viaje de Chihiro', 'Manga', 'Miyazaki', 13, 'https://es.web.img2.acsta.net/pictures/21/05/11/13/47/5979708.jpg',3),
      new Book('Kiki aprendiz de bruja', 'Manga', 'Miyazaki', 6, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/nicky-aprendiz-bruja-portada-1858271.jpg?itok=mBit3DEX',4),

      new Book('El recuerdo de Marnie','Manga','Miyazaki',15,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0wlO4XpGlSKl2HxgQcLc_QEtxOLOk0i5JSlNp2a243T21Qrpc2LvpUjbLuxPooOF6mQ&usqp=CAU',5),
      new Book('La Colina de las Amapolas', 'Manga', 'Miyazaki', 12, 'https://www.ecartelera.com/carteles/6300/6307/003_p.jpg',6),
      new Book('El viento se levanta', 'Manga', 'Miyazaki', 10, 'https://www.tierraadentro.cultura.gob.mx/wp-content/uploads/2014/09/thewindrises.jpg',7),
      new Book('El cuento de la princesa Kaguya', 'Manga', 'Miyazaki', 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzgfTa5xbkTXqDo5xvgUllxVigYtBJ2o68xCTXHqTBDyCxaVNk6Unh6NvGAOyQ2t8vWo&usqp=CAU',8),

    ]
  }


  // metodos--------------

  // Añadir libro
  public updateBook(newtitle:string,newType:string,newAuthor:string, newPrice:string, newPhoto:string, newid:string):any{

    let price = parseInt(newPrice)
    let idNum = parseInt(newid)

    let newBook = new Book(newtitle,newType,newAuthor, price,newPhoto,idNum)

    console.log(newBook);
    this.myBooks.push(newBook)
  }

// eliminar libro COMUNICACIÓN HIJO-PADRE
public deleteBook(id_Book:number){
  
  console.log(id_Book);
 
  // metodo filter para sobrrescribir el array de libros que se muestra. Recorremos el array y los elemntos del array(los libros), y le decimos que nos devuelva los libros que no coincidan con el id que le pasamos
  this.myBooks = this.myBooks.filter(book => book.id_books != id_Book)
  
  console.log(this.myBooks);
  
  
}

}

