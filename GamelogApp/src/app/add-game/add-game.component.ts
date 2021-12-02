import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from '../models/game';
import { User } from '../models/user';
import { UserGamesService } from '../service/user-games.service';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  newGame = new FormControl('');
  form: FormGroup
  user: User = {}
  options: String[] = ["PC", "Nintendo", "Xbox", "Playstation"]
  completeStatus: String[] = ["Unplayed", "Completed", "Playing", "Beaten"];
  userid = JSON.parse(localStorage.getItem('id')|| '{}');

  constructor(private readonly fb: FormBuilder,
    private gameService: UserGamesService,
    private router:Router) { 
      //creating the FormBuilder and setting it's default values as well as the requirements
      this.form = this.fb.group({
        gamename: ["",Validators.required],
        gamesystem: ["",Validators.required],
        playtime: ["",Validators.required],
        completion: [""],
        userid: 0
      });
    }

  ngOnInit(): void {
  }

  addNewGame():void{
    console.log("New Game: " + this.form.getRawValue);
    //calls the UserGamesService to take the data from the form and pass it to the backend
    let game:Game = {gamename: this.form.value.gamename,
                    gamesystem: this.form.value.gamesystem,
                    playtime: this.form.value.playtime,
                    completion: this.form.value.completion,
                    user: { userid: Number(localStorage.getItem('id'))}}
    this.gameService.addNewGame(game).subscribe({
      next: ()=>{
        console.log("The game has been added.")
        //reload the page, allowing for the newly added game to populate into the table
        location.reload();
        }
      }
    )
  }

}
