import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user:User): Observable<User>{
    console.log(user);
    return this.http.post<User>('http://localhost:8080/login/enter', user)
  }
}
