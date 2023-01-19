import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResgisterComponent } from './pages/resgister/resgister.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'registro', component:ResgisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
