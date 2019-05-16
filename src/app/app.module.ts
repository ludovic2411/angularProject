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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EntreprisesComponent,
    PersonnesComponent,
    MonProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
