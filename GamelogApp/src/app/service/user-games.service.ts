import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class UserGamesService {

  
  id = Number (localStorage.getItem('id'));

  constructor(private http:HttpClient,
              private cookieServ:CookieService) {
               
               }

  userGameList(): Observable<Game[]>{
    return this.http.get<Game[]>(`http://localhost:8080/games/${this.id}`)
  }

  getGame(gameid: number): Observable<Game>{
    return this.http.get<Game>(`http://localhost:8080/games/detail/${gameid}`)
  }

  topGames(): Observable<Game[]>{
    return this.http.get<Game[]>(`http://localhost:8080/topgames`)
  }

  addNewGame(game:Game){
    console.log(game);
    return this.http.post<Game>('http://localhost:8080/games', game)
  }

  deleteGame(gamedId: Number) {
    return this.http.delete(`http://localhost:8080/games/delete/${gamedId}`)
  }

  updateGame(game: Game){
    return this.http.put("http://localhost:8080/games/updateGame", game);
  }


  // updateGame(): Observable<Game>{
  //   console.log("Updating game");
  //   return this.http.put<Game>(`http://localhost:8080/games/update/${gameid}`)
  // }

}
