import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Login} from "../models/Login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://10.19.66.5:3000/login";

  constructor(private http:HttpClient) { }

  logIn( input:Login):Observable<Login> {
    return this.http.post<Login>(this.url,input);
  }

  storeSession(user:Login){
    sessionStorage.setItem("user",JSON.stringify(user));
  }
}
