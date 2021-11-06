import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  private passedGame?: Game;

  constructor() { }

  setGame(game: Game){
    this.passedGame = game;
  }

  getGame(){
    return this.passedGame;
  }
}
