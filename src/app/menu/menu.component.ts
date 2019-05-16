import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../../models/MenuItem";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faBusinessTime} from "@fortawesome/free-solid-svg-icons";

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

  constructor() { }

  ngOnInit() {
    this.items=[
      new MenuItem("entreprises","/entreprises",faBusinessTime),
    new MenuItem("personnes","/personnes",faUsers),
      new MenuItem("mon profil","/profile",faUser)
    ];
  }

}
