import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class UserGamesService {
  id = localStorage.getItem("id");

  constructor(private http:HttpClient) { }

  userGameList(): Observable<Game[]>{
    console.log(this.id);
    return this.http.get<Game[]>(`http://localhost:8080/games/${this.id}`)
  }

  topTenGames(): Observable<Game[]>{
    return this.http.get<Game[]>(`http://localhost:8080/games/top`)
  }

}
