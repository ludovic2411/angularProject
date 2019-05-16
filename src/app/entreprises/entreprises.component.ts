import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Services/data.service";
import {Entreprise} from "../../models/Entreprise";

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.sass']
})
export class EntreprisesComponent implements OnInit {
  entreprises:Entreprise[]=[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll():any{
    this.dataService.getEntreprises().subscribe((data:any)=>{
      console.log(data);
    });
  }
}
