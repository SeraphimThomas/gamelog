import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
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
  form: FormGroup
  private cookie_name = "";
  password = "";
  username = "";

  constructor(private readonly fb: FormBuilder, private loginService:LoginService, private router:Router, private cookie:CookieService) { 
    this.form = this.fb.group({
      username: [],
      password: []
    });
  }
  ngOnInit(): void {
  }

  setCookie(username: string){
    this.cookie.set('Login', username);
  }

onSubmit():void{
  console.log("The username is: " + this.form.getRawValue);
  let user:User = {username: this.form.value.username,
                  password: this.form.value.password};
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
