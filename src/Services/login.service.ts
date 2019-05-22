import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Login} from "../models/Login";
import {Router} from "@angular/router";
import {Personnes} from "../models/Personnes";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://10.19.66.5:3000";

  constructor(private http:HttpClient, private router:Router) { }

  logIn( input:Login):Observable<Login> {
    return this.http.post<Login>(this.url+"/login",input).pipe(catchError(this.handleError));
  }

  register(newUser:Personnes):Observable<Personnes>{
    return this.http.post<Personnes>(this.url+"/personnes",newUser).pipe(catchError(this.handleError));
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

  private handleError(error: HttpErrorResponse) {
    let message:string='Something bad happened; please try again later.';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      if (error.error.message=="org.hibernate.exception.ConstraintViolationException: could not execute statement"){
        message="Vous avez peut-être déjà un compte"
      }
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      message);
  };

}
