import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { TeamComponent } from './team/team.component';
=======
import { ServicesComponent } from './services/services.component';
>>>>>>> dev


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
<<<<<<< HEAD
    path: 'team', component: TeamComponent
=======
    path: 'services', component: ServicesComponent
>>>>>>> dev
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
