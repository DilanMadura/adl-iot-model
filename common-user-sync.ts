export class CommonUserSync {
  private _name: string;
  private _phone: string;
  private _vat_no: string;
  private _address: string;
  private _email: string;
  private _brn: string;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get vat_no(): string {
    return this._vat_no;
  }

  set vat_no(value: string) {
    this._vat_no = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get brn(): string {
    return this._brn;
  }

  set brn(value: string) {
    this._brn = value;
  }
}
