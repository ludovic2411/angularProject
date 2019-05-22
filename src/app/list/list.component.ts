import {Component, Input, OnInit} from '@angular/core';
import {Entreprise} from "../../models/Entreprise";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {LoginService} from "../../Services/login.service";
import {Login} from "../../models/Login";
import {DataService} from "../../Services/data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input() entreprise:Entreprise;

  faPlus=faPlus;
  //email de l'utilisateur loggé
  user:Login;

  constructor(private login:LoginService,private data:DataService) { }

  ngOnInit() {
  }

  addList(id:number) {
    this.user=this.login.getSession()
    let objectToInsert={recruteurEmail:this.user.email,
      entrepriseId:id};
    this.data.addToFavorite(objectToInsert,this.user.email).subscribe((data)=>{
      if(data!=null){
        alert("L'entreprise a été ajoutée à votre liste personnelle")
      }
    })
  }
}
