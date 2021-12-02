import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import igdb from 'igdb-api-node';
import { Game } from '../models/game';
import { headers } from '../models/headers';

@Injectable({
  providedIn: 'root'
})
export class IgdbCallService {

  client = igdb('cg5z5hbancmltvp9nlgsjd8np18mhw', 'ag9oqpwnp6zoxf2b33jazwf96lutld');
  gameData: any;
  url = 'https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games'
  body = "";


  constructor(private http: HttpClient) {

  }

  // findGameApiDeets(game: Game) {
  //   return this.http.post<[]>(`${this.url}/?fields=name,id,cover.url,videos.*,summary&search='${game.gamename}'`,
  //     this.body, this.httpOptions)
  // }

  //This server sends an async fetch to get the data from the IGDB API


  async findGameApiDeets(game: Game) {
    // const headers = new Headers({
    //   'Client-ID': 'cg5z5hbancmltvp9nlgsjd8np18mhw',
    //   'Authorization': 'Bearer ag9oqpwnp6zoxf2b33jazwf96lutld'
    // })

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




