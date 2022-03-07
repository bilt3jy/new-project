import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';
import { PepoleComponent } from './pepole/pepole.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';


const routes: Routes = [
  {path:"",redirectTo:'register',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"movie",component:MovieComponent},
  {path:"people",component:PepoleComponent},
  {path:"tv",component:TvComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:NotFoundedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
