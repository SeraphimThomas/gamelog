import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../models/game';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserGamesService } from '../service/user-games.service';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css']
})
export class GamedetailComponent implements OnInit {

  @Input() game?: Game;
  
  constructor(private route: Router,
              private gameService: UserGamesService,
              private location: Location) { }

  ngOnInit(): void {
    console.log("The game is: " + this.game);
  }



}