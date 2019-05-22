import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntreprisesComponent} from "./entreprises/entreprises.component";
import {PersonnesComponent} from "./personnes/personnes.component";
import {MonProfileComponent} from "./mon-profile/mon-profile.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {AuthGuard} from "./auth/auth.guard";
import {RegisterComponent} from "./register/register.component";
import {FavoritesComponent} from "./favorites/favorites.component";

const routes: Routes = [
  {path:"entreprises",component:EntreprisesComponent,canActivate:[AuthGuard]},
  {path:"personnes",component:PersonnesComponent,canActivate:[AuthGuard]},
  {path:"profile",component:MonProfileComponent,canActivate:[AuthGuard]},
  {path:"signup",component:RegisterComponent},
  {path:"",component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
