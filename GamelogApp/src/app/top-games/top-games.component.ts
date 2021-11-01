import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { UserGamesService } from '../service/user-games.service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {

  topGames: Game[] = [];
  collection = { count: 30, data: []};
  config: any;
  options: String[] = ["Alphabetical", "Playtime"];
  sortingOption: String = "Alphabetical";
  

  constructor(private games:UserGamesService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  ngOnInit(): void {
    this.getTopGames(this.sortingOption);
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }

  getTopGames(sort: String){
    this.games.topGames().subscribe(gameList=>{
      this.topGames = gameList;
      if (sort === "Alphabetical"){
        this.topGames.sort((a, b) => (a.gamename < b.gamename) ? -1 : 1);
        }else if (sort === "Playtime"){
        this.topGames.sort((a, b)=> (a.playtime < b.playtime) ? -1 : 1);
        }
    })
  }

  selectedSorting(event: any){
    this.sortingOption = event.target.value;
    console.log(this.sortingOption);
    this.sortingTG(this.sortingOption);
  }

  sortingTG(sort: String){
    
  }
}
