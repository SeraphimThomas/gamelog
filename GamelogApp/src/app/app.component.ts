import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game Log';
  private cookie_name = '';
  private all_cookies: any= '';
  mode = true;

constructor(public cookies:CookieService,
            private router:Router){
  
}
logout(){
  this.cookies.delete('Login');
  localStorage.removeItem("id");
  this.router.navigate(['login']);
  console.log(localStorage.getItem("id"))
}
toggleDark(): void{
  document.body.classList.toggle('dark');
}

ngOnInit(): void{
  this.cookie_name=this.cookies.get('Login');
  this.all_cookies=this.cookies.getAll();
}
}
