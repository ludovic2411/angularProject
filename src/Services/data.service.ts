import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entreprise} from "../models/Entreprise";
import {Observable} from "rxjs";
import {Personnes} from "../models/Personnes";

const URL = 'http://10.19.66.5:3000/entreprises';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string="http://10.19.66.5:3000/";

  constructor(private http:HttpClient) {
    console.log("service injected");
  }

  get Entreprises(): Observable<Entreprise>{
   return this.http.get<Entreprise>(`${URL}`);
  }

  getProfile(user:string){
    return this.http.get<Personnes>(this.baseUrl+"personnes/find?email="+user);
  }
}
