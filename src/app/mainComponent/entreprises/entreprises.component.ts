import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../Services/data.service";
import {Entreprise} from "../../../models/Entreprise";
import {faArrowAltCircleRight, faPlus} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.sass']
})
export class EntreprisesComponent implements OnInit {
  entreprises: Entreprise []=[];
  entreprise:Entreprise;
  faGo:any=faArrowAltCircleRight;
  faPlus=faPlus;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.entreprises=this.getAll();
  }
  getAll():Entreprise[]{
    let resultSet:Entreprise []=[];
    this.dataService.Entreprises.subscribe((data:any)=>{
      //this.entreprises=data
      for(let i:number=0;i<data.length;i++){
        resultSet.push(new Entreprise(data[i].nom,data[i].siteWeb,data[i].email,data[i].rue,data[i].numero,data[i].cp,data[i].ville,data[i].entrepriseId));
      }
    });
    return resultSet;
  }
}
