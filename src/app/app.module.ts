import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layer/menu/menu.component';
import { EntreprisesComponent } from './mainComponent/entreprises/entreprises.component';
import { PersonnesComponent } from './mainComponent/personnes/personnes.component';
import { MonProfileComponent } from './mainComponent/mon-profile/mon-profile.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { FooterComponent } from './layer/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../Services/data.service";
import { SignInComponent } from './mainComponent/sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListComponent } from './subComponent/list/list.component';
import { FavoritesComponent } from './mainComponent/favorites/favorites.component';
import { RegisterComponent } from './mainComponent/register/register.component';
import { AddEntrepriseComponent } from './mainComponent/add-entreprise/add-entreprise.component';
import { PersonneListItemComponent } from './subComponent/personne-list-item/personne-list-item.component';
import { ContactPersonneComponent } from './subComponent/contact-personne/contact-personne.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EntreprisesComponent,
    PersonnesComponent,
    MonProfileComponent,
    FooterComponent,
    SignInComponent,
    ListComponent,
    FavoritesComponent,
    RegisterComponent,
    AddEntrepriseComponent,
    PersonneListItemComponent,
    ContactPersonneComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
