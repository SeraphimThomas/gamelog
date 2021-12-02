import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { User } from '../models/user';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormControl } from '@angular/forms';
import { animate } from "motion";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCred = new FormControl('');
  incorrect:boolean = false;
  form: FormGroup
  password = "";
  username = "";
  fieldTextType: boolean = false;
  animation = animate('header',{x: [0, 500, 0]})
  

  constructor(private readonly fb: FormBuilder, 
    private loginService:LoginService, 
    private router:Router, 
    private cookie:CookieService) { 
    this.form = this.fb.group({
      username: "",
      password: ""
    });
  }
  ngOnInit(): void {
  }

  // makeMotion(){
  //   this.animation.play
  // }
 
/*
Simple submit function calling the service and passing it the data from the form
*/
onSubmit():void{
  this.incorrect=false;
  console.log("The username is: " + this.form.getRawValue);
  let user:User = {username: this.form.value.username,
                  password: this.form.value.password};
  this.loginService.login(user).subscribe({
    next: (data:User)=>{
      if(data === null){
        this.incorrect=true;
      }else{
        //stores the ID number of the user for furture use
        localStorage.setItem('id', String(data.userid));
        //stores the login name as a cookie that's only there for a time.
        this.cookie.set('Login', String(data.username), 0.25);
        //navigate to home page on successful login
        this.router.navigate(['home']);
      }
    }
  })
}
//Function to toggle the field type of the password input (show-hide password function)
toggleFieldTextType(){
  this.fieldTextType = !this.fieldTextType;
}

}
