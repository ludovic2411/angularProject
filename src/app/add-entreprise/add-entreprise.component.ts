import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.sass']
})
export class AddEntrepriseComponent implements OnInit {

  entrepriseForm=new FormGroup({
    nom:new FormControl('',[Validators.required]),
    siteWeb:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    telephone: new FormControl(''),
    adresse: new FormGroup({
      cp:new FormControl('',[Validators.required]),
      rue: new FormControl('',[Validators.required]),
      numero: new FormControl('',[Validators.required]),
      ville:new FormControl('',[Validators.required]),
      pays:new FormControl('',[Validators.required])
    })
  });

  constructor() { }

  ngOnInit() {
  }

}
