import {Component, Input, OnInit} from '@angular/core';
import {faEnvelope,faUser,faWindowClose} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-personne-list-item',
  templateUrl: './personne-list-item.component.html',
  styleUrls: ['./personne-list-item.component.sass']
})
export class PersonneListItemComponent implements OnInit {

  @Input() nom:string;
  @Input() prenom:string;
  @Input() email:string;
  @Input() recruteur:boolean;
  faSend=faEnvelope;
  faUser=faUser;
  faClose=faWindowClose;
  constructor() { }

  ngOnInit() {
  }

  send(mail:string) {
    let modal=document.querySelector("#modal");
    modal['style'].display="block";
  }

  close() {
    let modal=document.querySelector("#modal");
    modal['style'].display="none";
  }
}
