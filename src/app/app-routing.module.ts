import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  { path: 'api', component: ApiComponent},
  { path: '', component: LoginComponent},
  { path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
