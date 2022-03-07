import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';
import { MovieComponent } from './movie/movie.component';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PepoleComponent } from './pepole/pepole.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundedComponent,
    MovieComponent,
    LoginComponent,
    PepoleComponent,
    RegisterComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
