import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import {Pays} from "../../models/Pays";
import {EntrepriseToInsert} from "../../models/EntrepriseToInsert";
import {DataService} from "../../Services/data.service";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {ZipCode} from "../../models/ZipCode";

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.sass']
})
export class AddEntrepriseComponent implements OnInit {

  faSend:any=faPaperPlane;
  faCheck=faCheckCircle;
  paysList:Pays[]=[
    new Pays('NL','Pays-Bas'),
    new Pays('BEL','Belgique'),
    new Pays('LUX','Luxembourg')
  ];

  zipList:ZipCode[];

  newEntreprise:EntrepriseToInsert;
  success:boolean=false;

  entrepriseForm=new FormGroup({
    nom:new FormControl('',[Validators.required]),
    siteWeb:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    telephone: new FormControl(''),
    adresse: new FormGroup({
      cp:new FormControl('',[Validators.required]),
      rue: new FormControl('',[Validators.required]),
      numero: new FormControl('',[Validators.required]),
      ville:new FormControl('',[Validators.required]),
      pays:new FormControl(this.paysList[1].getCode(),[Validators.required])
    })
  });

  constructor(private data:DataService) { }

  ngOnInit() {
    this.zipList=this.getZipCode();
    //console.log(this.zipList)
  }

  onSubmit() {
   if (this.entrepriseForm.valid){
     let e=this.entrepriseForm.value;
     let a=this.entrepriseForm.value.adresse;
     this.newEntreprise=new EntrepriseToInsert(e.nom,e.siteWeb,e.email,e.telephone,a.cp,a.rue,a.numero
   ,a.ville,a.pays);
   }
   console.log(this.newEntreprise)
   this.data.createEntreprise(this.newEntreprise).subscribe((data:EntrepriseToInsert)=>{
     if (data!=null){
       this.success=true;
     }
   });
  }

  getZipCode():ZipCode[]{
    let resultSet:ZipCode[]=[];
     this.data.getZipCode("assets/zipcode-belgium.json").subscribe((data:Object[])=>{
      for(let i:number=0;i<data.length;i++){
        resultSet.push(new ZipCode(parseInt(data[i]["zip"]),data[i]["city"]));
      }
    });
    return resultSet;
  }

  updateVille(ville:string){
    this.entrepriseForm.patchValue({
      adresse:{
        ville:ville
      }
    });
  }


}
