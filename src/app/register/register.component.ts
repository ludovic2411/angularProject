import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Personnes} from "../../models/Personnes";
import {LoginService} from "../../Services/login.service";
import {Login} from "../../models/Login";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  //Nouvel utilisateur
  newUser:Personnes;
  //nouveau login
  newLogin:Login;
  //erreur si l'user existe déjà
  exist:boolean=false;

  registerForm=new FormGroup(
    {
      email:new FormControl("",[Validators.email,Validators.required]),
      nom:new FormControl("",[Validators.required]),
      prenom:new FormControl("",Validators.required),
      telephone:new FormControl(""),
      pwd:new FormControl("",[Validators.required,Validators.min(4)]),
      recruteur:new FormControl("",[Validators.required])
    }
  );

  constructor(private login:LoginService) { }

  ngOnInit() {
  }

  register() {
    if(this.registerForm.valid){
      this.newUser=new Personnes(this.registerForm.value.email,this.registerForm.value.nom,this.registerForm.value.prenom,this.registerForm.value.telephone,this.registerForm.value.pwd,
        this.registerForm.value.recruteur);
     this.login.register(this.newUser).subscribe((data:any)=>{
       this.login.storeSession(new Login(this.newUser.getEmail(),this.newUser.getPwd()));
          this.login.redirectProfile();
      },error=>this.exist=true)

    }
  }
}
