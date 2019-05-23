import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Services/data.service";
import {LoginService} from "../../Services/login.service";
import {Login} from "../../models/Login";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent implements OnInit {

  currentUser:Login;
  favorites:Object[]=[];
  faMinus:any=faMinus;

  constructor(private data:DataService,private login:LoginService) { }

  ngOnInit() {
    this.favorites=this.getFavorites();
    console.log(this.favorites)
  }

  getFavorites(){
    let favList:Object[]=[];
    this.currentUser=this.login.getSession();
    this.data.getFavorites(this.currentUser.email).subscribe((data:Object[])=>{
      for(let i:number=0;i<data.length;i++){
        favList.push(data[i])
      }
    });
    return favList;
  }

  deleteFavorite(id:number){
    this.currentUser=this.login.getSession();
    let favoriteToDelete:Object={recruteurEmail:this.currentUser.email,entrepriseId:id};
    this.data.deleteFavorite(id).subscribe();
  }

}
