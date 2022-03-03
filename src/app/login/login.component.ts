import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myimgwave:string = "src/app/login/img/login.jpg";
  myimgavatar:string = "src/app/login/img/login.jpg";
  myimgbg:string = "src/app/login/img/bg.svg";
  constructor() { }

  ngOnInit(): void {
  }
  

}
