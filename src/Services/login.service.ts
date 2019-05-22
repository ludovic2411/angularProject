import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Login} from "../models/Login";
import {Router} from "@angular/router";
import {Personnes} from "../models/Personnes";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://10.19.66.5:3000";

  constructor(private http:HttpClient, private router:Router) { }

  logIn( input:Login):Observable<Login> {
    return this.http.post<Login>(this.url+"/login",input);
  }

  register(newUser:Personnes):Observable<Personnes>{
    return this.http.post<Personnes>(this.url+"/personnes",newUser);
  }

  storeSession(user:Login){
    sessionStorage.setItem("user",JSON.stringify(user));
  }

  getSession():Login{
    let currentUser:Login=null;
    currentUser=JSON.parse(sessionStorage.getItem("user"));
    return currentUser;
  }

  redirectProfile(){
    this.router.navigate(['/profile']);
  }

}
