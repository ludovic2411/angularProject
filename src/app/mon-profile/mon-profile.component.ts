import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Services/data.service";
import {Personnes} from "../../models/Personnes";
import {LoginService} from "../../Services/login.service";
import {Login} from "../../models/Login";

@Component({
  selector: 'app-mon-profile',
  templateUrl: './mon-profile.component.html',
  styleUrls: ['./mon-profile.component.sass']
})
export class MonProfileComponent implements OnInit {

  user:Personnes;
  currentLogin:Login;

  constructor(private service:DataService,private login:LoginService) { }

  ngOnInit() {
    this.loadPersonnalDatas();
    console.log(this.user)
  }

  loadPersonnalDatas() {

    this.currentLogin=this.login.getSession();
    this.service.getProfile(this.currentLogin.email).subscribe((data: Personnes) => {
    this.user=new Personnes(data.email,data.nom,data.prenom,data.telephone,data.pwd,data.isRecruteur);
    });
  }
}
