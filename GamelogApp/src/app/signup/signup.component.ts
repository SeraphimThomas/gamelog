import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/user';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newAcc = new FormControl('');
  form: FormGroup;
  incorrect:boolean = false;

  constructor(private readonly fb: FormBuilder, private signService:SignupService) {
    this.form = this.fb.group({
      username: [],
      password: []
    });
  }

  ngOnInit(): void {
  }

  signUp():void{
    console.log("The sign in was for "+ this.form.getRawValue);
    let user:User = {username: this.form.value.username,
    password: this.form.value.password};
    this.signService.signUp(user).subscribe({
      next: (data:User)=>{
        if(data === null){
          this.incorrect=true;
        }else{
          console.log("A new user has been registered: " + data.password);
        }
      }
    })
  }

}
