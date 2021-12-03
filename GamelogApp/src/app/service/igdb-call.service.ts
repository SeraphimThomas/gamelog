import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import igdb from 'igdb-api-node';
import { Game } from '../models/game';
import { headers } from '../models/headers';
//Headers is a file in the .gitignore.  It would be the only bit of data another server would have to add in to make this
//work

@Injectable({
  providedIn: 'root'
})
export class IgdbCallService {

  client = igdb('cg5z5hbancmltvp9nlgsjd8np18mhw', 'ag9oqpwnp6zoxf2b33jazwf96lutld');
  gameData: any;
  url = 'https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games'
  //The IGDB API doesn't work well with cors.  To get around this, the solutions are the make a server of the
  //work around ULR 'cors-anywhere' or, just go to the URL pre-pended to the above URL and activate a demo.  For 
  //the purpose of this, I'm just using the demo server since it's more a proof of concept


  constructor(private http: HttpClient) {

  }



  async findGameApiDeets(game: Game) {
    console.log("Getting list of games")
    //the fetch request with the correct query fields for basic information and videos
    await fetch(`${this.url}/?fields=name,id,cover.url,videos.*,summary&search='${game.gamename}'`, {
      method: 'POST',
      headers: headers
    })
      .then((response) => response.json().then(data => {
        this.gameData = data;
      })
      )
    console.log(this.gameData)
    return this.gameData;

  }
}




