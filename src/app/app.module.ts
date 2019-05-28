import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { MonProfileComponent } from './mon-profile/mon-profile.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../Services/data.service";
import { SignInComponent } from './sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListComponent } from './list/list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RegisterComponent } from './register/register.component';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { PersonneListItemComponent } from './personne-list-item/personne-list-item.component';
import { ContactPersonneComponent } from './contact-personne/contact-personne.component';


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
