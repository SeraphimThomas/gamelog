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

constructor(public cookies:CookieService,
            private router:Router){
  
}
deleteCookie(){
  this.cookies.delete('Login');
  this.router.navigate(['login'])
}

ngOnInit(): void{
  this.cookie_name=this.cookies.get('Login');
  this.all_cookies=this.cookies.getAll();
}
}
