import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class NewGameService {

  constructor(private http:HttpClient) { }

  addNewGame(game:Game){
    console.log(game);
    return this.http.post<Game>('http://localhost:8080/games', game)
  }
}
