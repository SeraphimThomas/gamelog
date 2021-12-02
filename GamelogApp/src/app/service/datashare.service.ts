import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  //service for passing data.  Maybe subject to deletion from lack of use

  private passedGame?: Game;

  constructor() { }

  setGame(game: Game){
    this.passedGame = game;
  }

  getGame(){
    return this.passedGame;
  }
}
