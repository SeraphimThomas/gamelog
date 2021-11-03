import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game';
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
              public router:Router) { }

  ngOnInit(): void {
    this.showUserGames();
  }

  showUserGames(): void{
    this.userGames.userGameList().subscribe(gameList=>{
      this.myGames = gameList;
      this.myGames.sort((a, b) => (a.gamename < b.gamename) ? -1 : 1);
    })
  }

  sendGame(game: Game){
    this.selectedGame=game;
    console.log(this.selectedGame);
    // this.router.navigate([`/detail/${game.gameid}`])
  }

  }
