export class Personnes {
  private _email:string;
  private _nom:string;
  private _prenom:string;
  private _telephone:number;
  private _pwd:string;
  private _isRecruteur:boolean;


  constructor(email: string, nom: string, prenom: string, telephone: number, pwd: string, isRecruteur: boolean) {
    this._email = email;
    this._nom = nom;
    this._prenom = prenom;
    this._telephone = telephone;
    this._pwd = pwd;
    this._isRecruteur = isRecruteur;
  }


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get telephone(): number {
    return this._telephone;
  }

  set telephone(value: number) {
    this._telephone = value;
  }

  get pwd(): string {
    return this._pwd;
  }

  set pwd(value: string) {
    this._pwd = value;
  }

  get isRecruteur(): boolean {
    return this._isRecruteur;
  }

  set isRecruteur(value: boolean) {
    this._isRecruteur = value;
  }
}
