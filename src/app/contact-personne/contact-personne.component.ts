import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";

@Component({
  selector: 'app-contact-personne',
  templateUrl: './contact-personne.component.html',
  styleUrls: ['./contact-personne.component.sass']
})
export class ContactPersonneComponent implements OnInit {

  faSendmail=faPaperPlane;
  @Input() destinataire:string;

  contactForm=new FormGroup({
    to:new FormControl(this.destinataire,[Validators.required,Validators.email]),
    subject:new FormControl('',[Validators.required]),
    text:new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  sendEmail() {
    console.log("send")
  }
}
