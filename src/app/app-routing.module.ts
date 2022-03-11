import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [

  { path: 'api', component: ApiComponent},
  { path: '', component: Login3Component},
  { path: 'login2', component:Login2Component},
  { path: 'signup', component:SignupComponent},
  { path: 'login', component:LoginComponent},
  { path: 'login3', component:Login3Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
