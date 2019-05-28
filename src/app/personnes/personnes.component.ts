import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Services/data.service";
import {Personnes} from "../../models/Personnes";

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.sass']
})
export class PersonnesComponent implements OnInit {

  personnesList:Personnes[];

  constructor(private data:DataService) { }

  ngOnInit() {
    this.personnesList=this.getPersonnes();
  }

  getPersonnes():Personnes[]{
    let dataSet:Personnes[]=[];
    this.data.getPersonnes().subscribe((data:Personnes[])=>{
      for(let i:number=0;i<data.length;i++){
        const key=data[i];
        dataSet.push(new Personnes(key['email'],key['nom'],key['prenom'],key['telephone'],key['pwd'],key['recruteur']));
      }
      }
    );
    return dataSet;
  }

}
