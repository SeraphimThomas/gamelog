import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  signUp(user:User): Observable<User>{
    console.log(user);
    return this.http.post<User>('http://localhost:8080/login/create', user)
  }
}
