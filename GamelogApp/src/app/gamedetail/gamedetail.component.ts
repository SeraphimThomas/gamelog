import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../models/game';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserGamesService } from '../service/user-games.service';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css']
})
export class GamedetailComponent implements OnInit {

  public game:Game | undefined;
  
  constructor(private route: ActivatedRoute,
              private gameService: UserGamesService,
              private location: Location) { }

  ngOnInit(): void {
    
  }

  recieveGame($event: Game | undefined){
    this.game = $event
  }

}