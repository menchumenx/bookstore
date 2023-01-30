import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksComponent } from './pages/books/books.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResgisterComponent } from './pages/resgister/resgister.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'registro', component:ResgisterComponent},
  {path: 'perfil', component:ProfileComponent},
  {path:'libros', component:BooksComponent},
  {path:'addBook', component:AddBookComponent},
  {path:'editBook', component:EditBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
