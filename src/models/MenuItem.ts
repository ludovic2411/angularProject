export class MenuItem {
  private _label:string;
  private _link:string;
  icon:any;

  constructor(label: string, link: string,icon:any) {
    this._label = label;
    this._link = link;
    this.icon=icon;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }
}
