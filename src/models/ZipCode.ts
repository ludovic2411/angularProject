export class ZipCode {
  zip:number;
  city:string;

  constructor(z:number,c:string){
    this.zip=z;
    this.city=c;

  }

  getZip():number{
    return this.zip;
  }

  setZip(zip:number){
    return this.zip=zip;
  }

  getCity():string{
    return this.city;
  }

  setCity(city:string){
    return this.city=city;
  }

}
