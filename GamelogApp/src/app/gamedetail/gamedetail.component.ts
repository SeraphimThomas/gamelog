import { Component, Input, OnInit, Sanitizer} from '@angular/core';
import { Game } from '../models/game';
import { ActivatedRoute, Router, ParamMap, Navigation } from '@angular/router';
import { Location } from '@angular/common';
import { UserGamesService } from '../service/user-games.service';
import { DatashareService } from '../service/datashare.service';
import { MyGamesComponent } from '../my-games/my-games.component';
import { IgdbCallService } from '../service/igdb-call.service';
import { GameDeets } from '../models/game-deets';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css']
})
export class GamedetailComponent implements OnInit {

  gameId: any;
  game: any;
  gameApi: any;
  gameInfo?: GameDeets;
  show: boolean = false;
  videoEmbed: any = "https://www.youtube.com/embed";
  
  constructor(private router: Router,
              private gameService: UserGamesService,
              private location: Location,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private apiService: IgdbCallService) { 
                this.videoEmbed = sanitizer.bypassSecurityTrustUrl(this.videoEmbed);
                }
                
              

  ngOnInit(): void {
    this.gameId = this.route.snapshot.params['gameid'];
    this.loadGameDetails(this.gameId);
  }
  // ngDoCheck():void{
  //   this.getData();
  // }

  loadGameDetails(gameId: number){
    this.gameService.getGame(gameId).subscribe(game =>
      {
        this.game=game;
        //add in functionality: If userId of game choosen does NOT match with userId currently in localStorage/cookie,
        //than do not allow access
      });
  }
goBack(){
  this.location.back();
}

  async getData(){
    this.gameApi= await this.apiService.findGameApiDeets(this.game);
    console.log(this.game.gamename)
  }


}