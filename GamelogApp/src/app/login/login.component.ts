import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  incorrect:boolean =false;

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    // var loggedIn:any = localStorage.getItem("id");
    // if(loggedIn !== null  loggedIn !== undefined){
    //   this.router.navigate(['home']);
    // }
  }

onSubmit(form:NgForm):void{
  let user:User = {username: form.value.username,
                  password: form.value.password};
  this.loginService.login(user).subscribe({
    next: (data:User)=>{
      if(data === null){
        this.incorrect=true;
      }else{
        console.log(JSON.stringify(data));
        localStorage.setItem("id", String(data.userId));
          localStorage.setItem("username", String(data.username));
          this.router.navigate(['home']);
      }
    }
  })
}

}
