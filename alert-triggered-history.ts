export class AlertTriggeredHistory {
  private _id: number;
  private _read: boolean;
  private _readTime: string;
  private _triggeredTime: string;
  private _entityName: string;
  private _deviceConfigurationName: string;
  private _alert: any;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get read(): boolean {
    return this._read;
  }

  set read(value: boolean) {
    this._read = value;
  }

  get readTime(): string {
    return this._readTime;
  }

  set readTime(value: string) {
    this._readTime = value;
  }

  get triggeredTime(): string {
    return this._triggeredTime;
  }

  set triggeredTime(value: string) {
    this._triggeredTime = value;
  }

  get entityName(): string {
    return this._entityName;
  }

  set entityName(value: string) {
    this._entityName = value;
  }

  get deviceConfigurationName(): string {
    return this._deviceConfigurationName;
  }

  set deviceConfigurationName(value: string) {
    this._deviceConfigurationName = value;
  }

  get alert(): any {
    return this._alert;
  }

  set alert(value: any) {
    this._alert = value;
  }
}
