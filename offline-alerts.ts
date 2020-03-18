export class OfflineAlerts {
  private _id: number;
  private _name: string;
  private _internal: boolean;
  private _priority: string;
  private _stateName: string;
  private _sms: any;
  private _alertCategory: string;
  private _alertInterval: number;
  private _alwaysOn: boolean;
  private _deviceConfigurationId: number;
  private _deviceId: number;
  private _email: any;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get internal(): boolean {
    return this._internal;
  }

  set internal(value: boolean) {
    this._internal = value;
  }

  get priority(): string {
    return this._priority;
  }

  set priority(value: string) {
    this._priority = value;
  }

  get stateName(): string {
    return this._stateName;
  }

  set stateName(value: string) {
    this._stateName = value;
  }

  get sms(): any {
    return this._sms;
  }

  set sms(value: any) {
    this._sms = value;
  }

  get alertCategory(): string {
    return this._alertCategory;
  }

  set alertCategory(value: string) {
    this._alertCategory = value;
  }

  get alertInterval(): number {
    return this._alertInterval;
  }

  set alertInterval(value: number) {
    this._alertInterval = value;
  }

  get alwaysOn(): boolean {
    return this._alwaysOn;
  }

  set alwaysOn(value: boolean) {
    this._alwaysOn = value;
  }

  get deviceConfigurationId(): number {
    return this._deviceConfigurationId;
  }

  set deviceConfigurationId(value: number) {
    this._deviceConfigurationId = value;
  }

  get deviceId(): number {
    return this._deviceId;
  }

  set deviceId(value: number) {
    this._deviceId = value;
  }

  get email(): any {
    return this._email;
  }

  set email(value: any) {
    this._email = value;
  }
}
