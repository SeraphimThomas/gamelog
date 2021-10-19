import { Component } from '@angular/core';
import { CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GamelogApp';
  private cookie_name = '';
  private all_cookies: any= '';

constructor(private cookies:CookieService){
  
}
deleteCookie(){
  this.cookies.delete('Login');
}

ngOnInit(): void{
  this.cookie_name=this.cookies.get('Login');
  this.all_cookies=this.cookies.getAll();
}
}
