import { Component, OnInit} from '@angular/core';
import { Game } from '../models/game';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserGamesService } from '../service/user-games.service';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css']
})
export class GamedetailComponent implements OnInit {

  game?: Game;
  
  constructor(private route: Router,
              private gameService: UserGamesService,
              private location: Location,
              private dataShare: DatashareService) { }

  ngOnInit(): void {
    this.game = this.dataShare.getGame();
    console.log("The game is: " + this.game);
  }



}