import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntreprisesComponent} from "./entreprises/entreprises.component";
import {PersonnesComponent} from "./personnes/personnes.component";
import {MonProfileComponent} from "./mon-profile/mon-profile.component";

const routes: Routes = [
  {path:"entreprises",component:EntreprisesComponent},
  {path:"personnes",component:PersonnesComponent},
  {path:"profile",component:MonProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
