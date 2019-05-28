import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntreprisesComponent} from "./mainComponent/entreprises/entreprises.component";
import {PersonnesComponent} from "./mainComponent/personnes/personnes.component";
import {MonProfileComponent} from "./mainComponent/mon-profile/mon-profile.component";
import {SignInComponent} from "./mainComponent/sign-in/sign-in.component";
import {AuthGuard} from "./auth/auth.guard";
import {RegisterComponent} from "./mainComponent/register/register.component";
import {FavoritesComponent} from "./mainComponent/favorites/favorites.component";
import {AddEntrepriseComponent} from "./mainComponent/add-entreprise/add-entreprise.component";

const routes: Routes = [
  {path:"entreprises",component:EntreprisesComponent,canActivate:[AuthGuard]},
  {path:"personnes",component:PersonnesComponent,canActivate:[AuthGuard]},
  {path:"profile",component:MonProfileComponent,canActivate:[AuthGuard]},
  {path:"favorites",component:FavoritesComponent,canActivate:[AuthGuard]},
  {path:"add",component:AddEntrepriseComponent,canActivate:[AuthGuard]},
  {path:"signup",component:RegisterComponent},
  {path:"",component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
