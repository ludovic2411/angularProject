import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Services/data.service";
import {Personnes} from "../../models/Personnes";
import {LoginService} from "../../Services/login.service";
import {Login} from "../../models/Login";
import {faUser,faMailBulk,faPhone} from "@fortawesome/free-solid-svg-icons";
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-mon-profile',
  templateUrl: './mon-profile.component.html',
  styleUrls: ['./mon-profile.component.sass']
})
export class MonProfileComponent implements OnInit {

  user:Personnes []=null;
  currentLogin:Login;
  faUser=faUser;
  faMailBulk=faMailBulk
  faPhone=faPhone;

  constructor(private service:DataService,private login:LoginService) { }

  ngOnInit() {
    this.user=this.loadPersonnalDatas();
    console.log(this.user)
  }

  loadPersonnalDatas():Personnes [] {
    let currentUser:Personnes=null;
    let userList:Personnes[]=[];
    this.currentLogin=this.login.getSession();
    this.service.getProfile(this.currentLogin.email).subscribe((data: any) => {
    userList.push(new Personnes(data.email,data.nom,data.prenom,data.telephone,data.pwd,data.recruteur));
    });
    return userList;
  }

  showfavorites() {
    let elems = document.querySelectorAll('.modal');
    let instances = M.modal.init(elems);
    instances.open();
  }
}
