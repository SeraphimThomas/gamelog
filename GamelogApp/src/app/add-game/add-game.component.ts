import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from '../models/game';
import { User } from '../models/user';
import { LoginService } from '../service/login.service';
import { NewGameService } from '../service/new-game.service';

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


  constructor(private readonly fb: FormBuilder, 
    private newGameService: NewGameService, 
    private router:Router) { 
      this.form = this.fb.group({
        gamename: ["",Validators.required],
        gamesystem: ["",Validators.required],
        playtime: ["",Validators.required],
        userid: ""
      });
    }

  ngOnInit(): void {
  }

  addNewGame():void{
    console.log("New Game: " + this.form.getRawValue);
    let game:Game = {gamename: this.form.value.gamename,
                    gamesystem: this.form.value.gamesystem,
                    playtime: this.form.value.playtime,
                    userid: JSON.parse(localStorage.getItem('id')|| '{}')}
    this.newGameService.addNewGame(game).subscribe({
      next: (data:Game)=>{
        console.log("The game has been added.")
        }
      }
    )
  }

}
