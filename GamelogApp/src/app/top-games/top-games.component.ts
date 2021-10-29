import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { UserGamesService } from '../service/user-games.service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {

  topGames: Game[] = [];

  constructor(private games:UserGamesService) { }

  ngOnInit(): void {
    this.getTopGames();
  }

  getTopGames(){
    this.games.topTenGames().subscribe(gameList=>{
      this.topGames = gameList;
      this.topGames.sort((a, b) => (a.gamename < b.gamename) ? -1 : 1);
    })
  }
}
