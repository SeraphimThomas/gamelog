import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule, routes } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { SignupComponent } from './signup/signup.component';
import { AddGameComponent } from './add-game/add-game.component';
import { TopGamesComponent } from './top-games/top-games.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { GamedetailComponent } from './gamedetail/gamedetail.component';
import { TimePipe } from './time.pipe';
import { UpdateGameComponent } from './update-game/update-game.component';


@NgModule({
  declarations: [
    TimePipe,
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AddGameComponent,
    TopGamesComponent,
    MyGamesComponent,
    GamedetailComponent,
    UpdateGameComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
