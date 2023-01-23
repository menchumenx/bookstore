import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResgisterComponent } from './pages/resgister/resgister.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'registro', component:ResgisterComponent},
  {path: 'perfil', component:ProfileComponent},
  {path:'libros', component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
