export class UserActionTypePermissions {
  private _actionTypeName: string;
  private _createdDate: string;
  private _createdUser: any;
  private _solutionTypeName: string;
  private _user: any;


  get actionTypeName(): string {
    return this._actionTypeName;
  }

  set actionTypeName(value: string) {
    this._actionTypeName = value;
  }

  get createdDate(): string {
    return this._createdDate;
  }

  set createdDate(value: string) {
    this._createdDate = value;
  }

  get createdUser(): any {
    return this._createdUser;
  }

  set createdUser(value: any) {
    this._createdUser = value;
  }

  get solutionTypeName(): string {
    return this._solutionTypeName;
  }

  set solutionTypeName(value: string) {
    this._solutionTypeName = value;
  }

  get user(): any {
    return this._user;
  }

  set user(value: any) {
    this._user = value;
  }
}
