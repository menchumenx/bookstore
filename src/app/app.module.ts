import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { ResgisterComponent } from './pages/resgister/resgister.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './pages/books/books.component';
import { BookReferencePipe } from './pipes/book-reference.pipe';
import { CardComponent } from './component/card/card.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent,
    ResgisterComponent,
    HomeComponent,
    ProfileComponent,
    BooksComponent,
    BookReferencePipe,
    CardComponent,
    AddBookComponent,
    EditBookComponent,
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
