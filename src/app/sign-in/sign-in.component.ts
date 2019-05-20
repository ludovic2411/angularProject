import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {applyRedirects} from "@angular/router/src/apply_redirects";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  email=new FormControl("",[Validators.required,Validators.email]);
  pwd=new FormControl("",[Validators.required]);
  invalid:boolean=false;
  invalidLogin:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  logIn() {
    if (!this.email.valid || !this.pwd.valid){
      this.invalid=true;
      console.log("1")
    }
    else if(this.email.value =="foo@foobar.com" && this.pwd.value == "foo"){
      console.log(this.email.value);
      console.log(this.pwd.value);

    }
    else{
      this.invalidLogin=true;
    }
  }
}
