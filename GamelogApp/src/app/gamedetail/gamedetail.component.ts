import { Component, Input, OnInit} from '@angular/core';
import { Game } from '../models/game';
import { ActivatedRoute, Router, ParamMap, Navigation } from '@angular/router';
import { Location } from '@angular/common';
import { UserGamesService } from '../service/user-games.service';
import { DatashareService } from '../service/datashare.service';
import { MyGamesComponent } from '../my-games/my-games.component';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css']
})
export class GamedetailComponent implements OnInit {

  gameId: any;
  game: any;
  
  constructor(private router: Router,
              private gameService: UserGamesService,
              private location: Location,
              private route: ActivatedRoute) { 
                }
              

  ngOnInit(): void {
    this.gameId = this.route.snapshot.params['gameid'];
    this.loadGameDetails(this.gameId);
  }

  loadGameDetails(gameId: number){
    this.gameService.getGame(gameId).subscribe(game =>
      {
        this.game=game;
      });
  }

}