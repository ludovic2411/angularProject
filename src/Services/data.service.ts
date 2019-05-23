import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Entreprise} from "../models/Entreprise";
import {Observable, throwError} from "rxjs";
import {Personnes} from "../models/Personnes";
import {catchError} from "rxjs/operators";

const URL = 'http://10.19.66.5:3000/entreprises';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string="http://10.19.66.5:3000";

  constructor(private http:HttpClient) {}
  //obtient toutes les entreprises
  get Entreprises(): Observable<Entreprise>{
   return this.http.get<Entreprise>(`${URL}`);
  }
  //ajoute une entreprise aux favoris d'une personne
  addToFavorite(input:Object,email:string):Observable<Object>{
    return this.http.post<Object>(this.baseUrl+"/personnes/favorites?email="+email,input).pipe(catchError(this.handleError));
  }

  //Supprime un favori de la liste d'une personne
  deleteFavorite(id:number):Observable<Object>{
    return this.http.delete<Object>(this.baseUrl+"/personnes/favorites/"+id);
  }

  //obtient les infos d'une personne
  getProfile(user:string){
    return this.http.get<Personnes>(this.baseUrl+"/personnes/find?email="+user).pipe(catchError(this.handleError));
  }

  //obtient les favoris d'une personne
  getFavorites(email:string){
    return this.http.get<Object>(this.baseUrl+"/personnes/favorites?email="+email);
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
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      message);
  };
}
