import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game';
import { DatashareService } from '../service/datashare.service';
import { UserGamesService } from '../service/user-games.service';


@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {

  myGames: Game[] = [];
  userId: number = 0;
  selectedGame?: Game;

  constructor(public userGames:UserGamesService,
              public router:Router,
              public sharedData:DatashareService) { }

  ngOnInit(): void {
    this.showUserGames();
  }

  showUserGames(): void{
    this.userGames.userGameList().subscribe(gameList=>{
      this.myGames = gameList;
      this.myGames.sort((a, b) => (a.gamename < b.gamename) ? -1 : 1);
    })
  }

  sendGame(game: Game) : void{
    this.selectedGame = game;
    this.router.navigateByUrl(`/detail/${game.gameid}`)
  }

  }
