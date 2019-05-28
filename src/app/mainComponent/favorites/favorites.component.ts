import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../Services/data.service";
import {LoginService} from "../../../Services/login.service";
import {Login} from "../../../models/Login";
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
    this.data.deleteFavorite(id).subscribe();
    this.favorites.map((key:Object)=>{
      if(key['favoriteId']==id){
        let position:number=this.favorites.indexOf(key)
        this.favorites.splice(position,1)
      }
    });

  }

}
