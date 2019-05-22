import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../../models/MenuItem";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faBusinessTime} from "@fortawesome/free-solid-svg-icons";
import {faSign} from "@fortawesome/free-solid-svg-icons/faSign";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  icons:any[];
  faUser=faUser;
  faUsers=faUsers;
  faBusinessTime=faBusinessTime;
  faSign=faSign;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    if (!this.auth.isAuthenticated()){

      this.items=[
        new MenuItem("signup","/signup",faSign),
        new MenuItem("entreprises","/entreprises",faBusinessTime),
        new MenuItem("personnes","/personnes",faUsers),
        new MenuItem("mon profil","/profile",faUser)
      ];
    } else {
      this.items=[
        new MenuItem("entreprises","/entreprises",faBusinessTime),
        new MenuItem("personnes","/personnes",faUsers),
        new MenuItem("mon profil","/profile",faUser)
      ];
    }
  }

}
