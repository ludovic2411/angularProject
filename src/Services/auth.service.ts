import { Injectable } from '@angular/core';
import {Login} from "../models/Login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    console.log("auth service injected")
  }

  //check si il y a un user authentifié
isAuthenticated():boolean{
   let  isAuth:boolean=false;
    if (sessionStorage.getItem("user")){
      isAuth=true;
    }
    return isAuth;
  }
}
