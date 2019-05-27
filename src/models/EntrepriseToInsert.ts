export class EntrepriseToInsert {
  private nomEntreprise:string;
  private site:string;
  private mail:string;
  private telephone:number;
  private cp:string;
  private rue:string;
  private numero:string;
  private nomVille:string;
  private pays:string;


  constructor(nom: string, siteWeb: string, email: string, telephone: number, cp: string, rue: string, numero: string, ville: string, pays: string) {
    this.nomEntreprise = nom;
    this.site= siteWeb;
    this.mail = email;
    this.telephone = telephone;
    this.cp = cp;
    this.rue = rue;
    this.numero = numero;
    this.nomVille = ville;
    this.pays = pays;
  }


  getNomEntreprise(): string {
    return this.nomEntreprise;
  }

  setNOmEntreprise(value: string) {
    this.nomEntreprise= value;
  }

  getSiteWeb(): string {
    return this.site;
  }

  setSiteWeb(value: string) {
    this.site = value;
  }

  getMail(): string {
    return this.mail;
  }

  setMail(value: string) {
    this.mail = value;
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

  getNomtVille(): string {
    return this.nomVille;
  }

  setNomVille(value: string) {
    this.nomVille = value;
  }

  getPays(): string {
    return this.pays;
  }

  setPays(value: string) {
    this.pays = value;
  }
}
