export class EntrepriseToInsert {
  private nom:string;
  private siteWeb:string;
  private email:string;
  private telephone:number;
  private cp:string;
  private rue:string;
  private numero:string;
  private ville:string;
  private pays:string;


  constructor(nom: string, siteWeb: string, email: string, telephone: number, cp: string, rue: string, numero: string, ville: string, pays: string) {
    this.nom = nom;
    this.siteWeb = siteWeb;
    this.email = email;
    this.telephone = telephone;
    this.cp = cp;
    this.rue = rue;
    this.numero = numero;
    this.ville = ville;
    this.pays = pays;
  }


  getNom(): string {
    return this.nom;
  }

  setNOm(value: string) {
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

  setEmail(value: string) {
    this.email = value;
  }

  getTelephone(): number {
    return this.telephone;
  }

  setTelephone(value: number) {
    this.telephone = value;
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

  gettVille(): string {
    return this.ville;
  }

  setVille(value: string) {
    this.ville = value;
  }

  getPays(): string {
    return this.pays;
  }

  setPays(value: string) {
    this.pays = value;
  }
}
