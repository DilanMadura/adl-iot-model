export class User {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _mobile: number;
  private _username: string;
  private _entityIds: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get mobile(): number {
    return this._mobile;
  }

  set mobile(value: number) {
    this._mobile = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get entityIds(): number {
    return this._entityIds;
  }

  set entityIds(value: number) {
    this._entityIds = value;
  }
}
