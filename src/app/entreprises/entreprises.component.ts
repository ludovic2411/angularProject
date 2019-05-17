import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Services/data.service";
import {Entreprise} from "../../models/Entreprise";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.sass']
})
export class EntreprisesComponent implements OnInit {
  entreprises: Entreprise []=[];
  entreprise:Entreprise;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.dataService.Entreprises.subscribe((data:Entreprise)=>{
       this.entreprises = data;
    });
  }
}
