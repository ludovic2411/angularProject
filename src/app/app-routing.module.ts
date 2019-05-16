import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntreprisesComponent} from "./entreprises/entreprises.component";
import {PersonnesComponent} from "./personnes/personnes.component";
import {MonProfileComponent} from "./mon-profile/mon-profile.component";
import {SignInComponent} from "./sign-in/sign-in.component";

const routes: Routes = [
  {path:"entreprises",component:EntreprisesComponent},
  {path:"personnes",component:PersonnesComponent},
  {path:"profile",component:MonProfileComponent},
  {path:"",component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
