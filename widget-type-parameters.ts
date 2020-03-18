export class WidgetTypeParameters {
  private _di: number;
  private _name: string;
  private _noOfAllowed: number;
  private _uiOther: string;
  private _width: number;
  private _height: number;
  private _clickable: boolean;
  private _deviceTypeId: number;
  private _formatter: string;


  get di(): number {
    return this._di;
  }

  set di(value: number) {
    this._di = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get noOfAllowed(): number {
    return this._noOfAllowed;
  }

  set noOfAllowed(value: number) {
    this._noOfAllowed = value;
  }

  get uiOther(): string {
    return this._uiOther;
  }

  set uiOther(value: string) {
    this._uiOther = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get clickable(): boolean {
    return this._clickable;
  }

  set clickable(value: boolean) {
    this._clickable = value;
  }

  get deviceTypeId(): number {
    return this._deviceTypeId;
  }

  set deviceTypeId(value: number) {
    this._deviceTypeId = value;
  }

  get formatter(): string {
    return this._formatter;
  }

  set formatter(value: string) {
    this._formatter = value;
  }
}
