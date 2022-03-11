import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {
  public loginForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password: [''],
    })
  }
login(){
this.http.get<any>("http://localhost:3000/signupUsers")
.subscribe(res=>{
  const user = res.find((a:any) => {
    return a.email === this.loginForm.value.email && this.loginForm.value.password
  });
  if(user) {
    alert("Login Success");
    this.loginForm.reset();
    this.router.navigate(['api'])
  }
  else {
    alert("Login Failure");
  }
}, err => {
  alert("Something went wrong");
})
}

}
