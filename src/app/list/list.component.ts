import {Component, Input, OnInit} from '@angular/core';
import {Entreprise} from "../../models/Entreprise";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input() entreprise:Entreprise;

  constructor() { }

  ngOnInit() {
  }

}
