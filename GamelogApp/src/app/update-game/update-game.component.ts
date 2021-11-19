import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {

  game: any;

  constructor() { }

  ngOnInit(): void {
    // this.gameid = this.route.snapshot.params['gameid'];
    // this.loadGameDetails(this.gameid);
  }

}
