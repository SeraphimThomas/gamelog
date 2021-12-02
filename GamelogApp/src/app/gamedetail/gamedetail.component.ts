import { Component, Input, NgZone, OnInit, Sanitizer } from '@angular/core';
import { Game } from '../models/game';
import { ActivatedRoute, Router, ParamMap, Navigation } from '@angular/router';
import { Location } from '@angular/common';
import { UserGamesService } from '../service/user-games.service';
import { MyGamesComponent } from '../my-games/my-games.component';
import { IgdbCallService } from '../service/igdb-call.service';



@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css']
})
export class GamedetailComponent implements OnInit {

  gameId: any;
  game: any;
  gameApi: any;
  gameSelected: any;


  constructor(private router: Router,
    private gameService: UserGamesService,
    private location: Location,
    private route: ActivatedRoute,
    private apiService: IgdbCallService) { }



  ngOnInit(): void {
    //takes the gameId, calls the backend to retrieve just that game and pull all the details from it
    this.gameId = this.route.snapshot.params['gameid'];
    this.loadGameDetails(this.gameId);
    //Calls the IgdbCallService to get the details of the game from the API database
    this.getData();
  }
  // ngDoCheck():void{
  //   this.getData();
  // }
  addApiId(id: Number) {
    //Allows the user to connect their game to the correct game from the IGDB database.  This ID is then stored with the other data
    //so that it will always show the correct game upon selecting it for details
    this.game.apiid = id;
    this.gameService.updateGame(this.game).subscribe({
      next: () => {
        console.log("Game has been assigned api ID: " + this.game.apiid);
        location.reload();
      }
    })
  }

  //async call to the service for more details from the API
  async getData() {
    this.gameApi = await this.apiService.findGameApiDeets(this.game);
    console.log(this.game.gamename)
  }

  loadGameDetails(gameId: number) {
    //call to the database for the details stored there.
    this.gameService.getGame(gameId).subscribe(game => {
      this.game = game;
    });
  }
  //Simple go back button using the Location class
  goBack() {
    this.location.back();
  }





}