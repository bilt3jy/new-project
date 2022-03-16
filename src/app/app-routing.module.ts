import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';
import { PepoleComponent } from './pepole/pepole.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';


const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"movie",canActivate:[AuthGuard],component:MovieComponent},
  {path:"people",canActivate:[AuthGuard],component:PepoleComponent},
  {path:"tv",canActivate:[AuthGuard],component:TvComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",canActivate:[AuthGuard],component:NotFoundedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
