import { Component, NgModule, NgModuleFactoryLoader, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game';
import { UserGamesService } from '../service/user-games.service';
import { Location } from '@angular/common';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {

  myGames: Game[] = [];
  userId: number = Number (localStorage.getItem('id'));
  selectedGame: any;
  systems: String[] = ["PC", "Nintendo", "Xbox", "Playstation"];
  completeStatus: String[] = ["Unplayed", "Completed", "Playing", "Beaten"];
  gameToUpdate: Game = {
    user: {userid: 0},
    gamename: "",
    gamesystem: "",
    playtime: 0,
    completion: ""
  }

  constructor(public userGames:UserGamesService,
              public router:Router,
              private readonly fb: FormBuilder) {
               }

  ngOnInit(): void {
    this.showUserGames();
  }
  reload(){
    location.reload();
  }

  showUserGames(): void{
    this.userGames.userGameList(this.userId).subscribe(gameList=>{
      this.myGames = gameList;
      this.myGames.sort((a, b) => (a.gamename < b.gamename) ? -1 : 1);
    })
  }

  sendGame(game: Game) : void{
    this.selectedGame = game;
    this.router.navigateByUrl(`/detail/${game.gameid}`)
  }

  // deleteDeny(){
  //   this.confirmDeletion = false;
  // }

  // confirmation(game: Game){
  //   this.selectedGame = game;
  //   this.confirmDeletion=true;
  //   console.log(this.selectedGame);
  //   console.log(this.confirmDeletion);
  // }
  editGame(game: Game){
      this.gameToUpdate = game;
  }

  updateGame(){
    return this.userGames.updateGame(this.gameToUpdate).subscribe({
      next: () => {
        console.log("Game has been updated");
        location.reload();
      }
    })
  }

  confirmDelete(game: Game){
    this.selectedGame = game;
  }

  deleteGame(): void{
    this.userGames.deleteGame(this.selectedGame.gameid).subscribe({
      next: ()=>{
        console.log("The game " + this.selectedGame.gamename + " was deleted.");
        location.reload();
      }
    })
  }
}

