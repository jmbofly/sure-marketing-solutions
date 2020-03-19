import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'home', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
