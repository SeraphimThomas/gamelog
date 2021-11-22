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
    this.gameId = this.route.snapshot.params['gameid'];
    this.loadGameDetails(this.gameId);
    this.getData();
  }
  // ngDoCheck():void{
  //   this.getData();
  // }
  addApiId(id: Number) {
    this.game.apiid = id;
    this.gameService.updateGame(this.game).subscribe({
      next: () => {
        console.log("Game has been assigned api ID: " + this.game.apiid);
        location.reload();
      }
    })
  }

  async getData() {
    this.gameApi = await this.apiService.findGameApiDeets(this.game);
    console.log(this.game.gamename)
  }

  loadGameDetails(gameId: number) {
    this.gameService.getGame(gameId).subscribe(game => {
      this.game = game;
    });
  }
  goBack() {
    this.location.back();
  }





}