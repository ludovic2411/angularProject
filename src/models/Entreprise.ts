export class Entreprise {
  private nom:string;
  private siteWeb:string;
  private email:string;
  private cp:string;
  private rue:string;
  private numero:string;
  private ville:string;
  private entrepriseId?:number;
  private pays?:string;

  constructor(nom: string, siteWeb: string, email: string, cp: string, rue: string, numero: string, ville: string,eId:number,pays?:string) {
    this.nom = nom;
    this.siteWeb = siteWeb;
    this.email = email;
    this.cp = cp;
    this.rue = rue;
    this.numero = numero;
    this.ville = ville;
    this.entrepriseId=eId;
    this.pays=pays;
  }

  getNom(): string {
    return this.nom;
  }

  setNom(value: string) {
    this.nom = value;
  }

  getSiteWeb(): string {
    return this.siteWeb;
  }

  setSiteWeb(value: string) {
    this.siteWeb = value;
  }

  getEmail(): string {
    return this.email;
  }

  set Email(value: string) {
    this.email = value;
  }

  getCp(): string {
    return this.cp;
  }

  setCp(value: string) {
    this.cp = value;
  }

  getRue(): string {
    return this.rue;
  }

  setRue(value: string) {
    this.rue = value;
  }

  getNumero(): string {
    return this.numero;
  }

  setNumero(value: string) {
    this.numero = value;
  }

  getVille(): string {
    return this.ville;
  }

  setVille(value: string) {
    this.ville = value;
  }


  getEntrepriseId(): number {
    return this.entrepriseId;
  }

  setEntrepriseId(value: number) {
    this.entrepriseId = value;
  }


  getPays(): string {
    return this.pays;
  }

  setPays(value: string) {
    this.pays = value;
  }
}
