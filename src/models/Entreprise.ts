export class Entreprise {
  private _nom:string;
  private _siteWeb:string;
  private _email:string;
  private _cp:string;
  private _rue:string;
  private _numero:string;
  private _ville:string;


  constructor(nom: string, siteWeb: string, email: string, cp: string, rue: string, numero: string, ville: string) {
    this._nom = nom;
    this._siteWeb = siteWeb;
    this._email = email;
    this._cp = cp;
    this._rue = rue;
    this._numero = numero;
    this._ville = ville;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get siteWeb(): string {
    return this._siteWeb;
  }

  set siteWeb(value: string) {
    this._siteWeb = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get cp(): string {
    return this._cp;
  }

  set cp(value: string) {
    this._cp = value;
  }

  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }

  get numero(): string {
    return this._numero;
  }

  set numero(value: string) {
    this._numero = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }
}
