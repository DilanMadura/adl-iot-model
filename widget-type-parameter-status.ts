export class WidgetTypeParameterStatus {
  private _name: string;
  private _deviceContextParameterId: number;
  private _configDevices: any;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get deviceContextParameterId(): number {
    return this._deviceContextParameterId;
  }

  set deviceContextParameterId(value: number) {
    this._deviceContextParameterId = value;
  }

  get configDevices(): any {
    return this._configDevices;
  }

  set configDevices(value: any) {
    this._configDevices = value;
  }
}
