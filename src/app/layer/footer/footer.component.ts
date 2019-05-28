import { Component, OnInit } from '@angular/core';
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {MenuItem} from "../../../models/MenuItem";
import {faDesktop} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  faCode=faCode;
  faDesktop=faDesktop;

  items:MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items=[
     new MenuItem("My Github","https://github.com/ludovic2411",faCode),
      new MenuItem("My Linkedin","https://www.linkedin.com/in/ludovic-ceccotti/",faDesktop)
    ];
  }

}
