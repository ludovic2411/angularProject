import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {applyRedirects} from "@angular/router/src/apply_redirects";
import {LoginService} from "../../Services/login.service";
import {Login} from "../../models/Login";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  email=new FormControl("",[Validators.required,Validators.email]);
  pwd=new FormControl("",[Validators.required]);
  user:Login;
  invalid:boolean=false;
  invalidLogin:boolean=false;
  constructor(private login:LoginService) { }

  ngOnInit() {
  }

  logIn() {
    if (!this.email.valid || !this.pwd.valid){
      this.invalid=true;
    }else{
      this.user=new Login(this.email.value,this.pwd.value);
      this.login.logIn(this.user).subscribe((data)=>{
        console.log(data);
        if(data!=null){
          this.login.storeSession(this.user);
        }else{
          this.invalidLogin=true;
        }
      })
    }

  }
}
