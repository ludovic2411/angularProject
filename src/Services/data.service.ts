import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entreprise} from "../models/Entreprise";
import {Observable} from "rxjs";

const URL = 'http://10.19.66.5:3000/entreprises';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {
    console.log("service injected");
  }

  get Entreprises(): Observable<Entreprise>{
   return this.http.get<Entreprise>(`${URL}`);
  }
}
