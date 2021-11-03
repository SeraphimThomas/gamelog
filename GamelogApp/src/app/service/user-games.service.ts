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

  getGame(gameid: number): Observable<Game>{
    return this.http.get<Game>(`http://localhost:8080/${gameid}`)
  }

  topGames(): Observable<Game[]>{
    return this.http.get<Game[]>(`http://localhost:8080/topgames`)
  }

  // updateGame(): Observable<Game>{
  //   console.log("Updating game");
  //   return this.http.put<Game>(`http://localhost:8080/games/update/${gameid}`)
  // }

}
