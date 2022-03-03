import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    SplitterModule,
    CardModule,
    MenubarModule,
    InputTextareaModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ScrollPanelModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
