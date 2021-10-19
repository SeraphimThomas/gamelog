import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCred = new FormControl('');
  incorrect:boolean = false;
  private cookie_name = "";
  password = "";
  username = "";

  constructor(private loginService:LoginService, private router:Router, private cookie:CookieService) { }

  ngOnInit(): void {
  }

  setCookie(username: string){
    this.cookie.set('Login', username);
  }

onSubmit(form:NgForm):void{
  console.log("The username is: " + form);
  let user:User = {username: form.value.username,
                  password: form.value.password};
  this.loginService.login(user).subscribe({
    next: (data:User)=>{
      if(data === null){
        this.incorrect=true;
      }else{
        // localStorage.setItem("id", String(data.userId));
          // localStorage.setItem("username", String(data.username));
          this.cookie.set('Login', String(data.username), 2);
          this.router.navigate(['home']);
      }
    }
  })
}

}
