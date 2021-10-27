import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../custom-validators';
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

  constructor(private readonly fb: FormBuilder, private signService:SignupService, private router: Router) {
    this.form = this.fb.group({
      username: ['',Validators.compose([Validators.required, Validators.minLength(5)])
    ],
      password: ['',Validators.compose([
              Validators.required,
              CustomValidators.patternValidator(/\d/, { hasNumber: true }),
              CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true}),
              CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true}),
              CustomValidators.patternValidator(/[_!@#$%&-()[\]+={}|\\'".,<>?]/,{ hasSpecialCharacters: true}),
              Validators.minLength(8)])
      ],
      // confirmPass: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    }
    // { validator: CustomValidators.passwordMatchValidator('password', 'confirmPass')}
    );
  }

  ngOnInit(): void {
  }

  get f(){
    return this.form.controls;
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
    this.router.navigate(['login']);
  }

}
