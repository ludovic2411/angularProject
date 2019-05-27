export class Pays {
  code:string;
  nom:string;

  constructor(c:string,p:string){
    this.code=c;
    this.nom=p;
  }

  getCode():string{
    return this.code;
  }

  setCode(c:string){
    this.code=c;
  }

  getNom():string{
    return this.nom;
  }

  setNom(n:string){
    this.nom=n;
  }
}
