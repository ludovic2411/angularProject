import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entreprise} from "../models/Entreprise";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {
    console.log("service injected");
  }

  getEntreprises(){
   return this.http.get<any>("10.19.66.5:3000/entreprises");
  }
}
