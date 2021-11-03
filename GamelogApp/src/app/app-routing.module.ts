import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { GamedetailComponent } from './gamedetail/gamedetail.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'mygames', component: MyGamesComponent, canActivate: [AuthGuard]},
  {path: 'detail/:gameid', component: GamedetailComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
