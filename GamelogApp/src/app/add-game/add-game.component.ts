import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from '../models/game';
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


  constructor(private readonly fb: FormBuilder, 
    private newGameService: NewGameService, 
    private router:Router) { 
      this.form = this.fb.group({
        gamename: "",
        gamesystem: "",
        playtime: "",
        userid: ""
      });
    }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log("New Game: " + this.form.getRawValue);
    let game:Game = {gamename: this.form.value.gamename,
                    gamesystem: this.form.value.gamesystem,
                    playtime: this.form.value.playtime,
                    userid: Number(localStorage.getItem("id"))};
    this.newGameService.addNewGame(game).subscribe({
      next: (data:Game)=>{
        console.log("The game has been added.")
        }
      }
    )
  }

}
