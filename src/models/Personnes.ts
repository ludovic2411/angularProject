export class Personnes {
  private email:string;
  private nom:string;
  private prenom:string;
  private telephone:number;
  private pwd:string;
  private recruteur:boolean;


  constructor(email: string, nom: string, prenom: string, telephone: number, pwd: string, recruteur: boolean) {
    this.email = email;
    this.nom = nom;
    this.prenom = prenom;
    this.telephone = telephone;
    this.pwd = pwd;
    this.recruteur = recruteur;
  }


  getEmail(): string {
    return this.email;
  }

  setEmail(value: string) {
    this.email = value;
  }

  getNom(): string {
    return this.nom;
  }

  setNom(value: string) {
    this.nom = value;
  }

  getPrenom(): string {
    return this.prenom;
  }

  setPrenom(value: string) {
    this.prenom = value;
  }

  getTelephone(): number {
    return this.telephone;
  }

  setTelephone(value: number) {
    this.telephone = value;
  }

  getPwd(): string {
    return this.pwd;
  }

  setPwd(value: string) {
    this.pwd = value;
  }

  getRecruteur():boolean{
    return this.recruteur;
  }
  setRecruteur(value: boolean) {
    this.recruteur = value;
  }
}
