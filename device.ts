export class Device {
  private _id: number;
  private _mac: string;
  private _serial: number;
  private _simNumber: number;
  private _name: string;
  private _deviceDefinitionId: string;
  private _entityId: number;
  private _parentDeviceId: number;
  private _location: string;
  private _additionalParams: any;
  private _utilizeState: string;
  private _offlineAlertState: string;
  private _virtual: boolean;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get mac(): string {
    return this._mac;
  }

  set mac(value: string) {
    this._mac = value;
  }

  get serial(): number {
    return this._serial;
  }

  set serial(value: number) {
    this._serial = value;
  }

  get simNumber(): number {
    return this._simNumber;
  }

  set simNumber(value: number) {
    this._simNumber = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get deviceDefinitionId(): string {
    return this._deviceDefinitionId;
  }

  set deviceDefinitionId(value: string) {
    this._deviceDefinitionId = value;
  }

  get entityId(): number {
    return this._entityId;
  }

  set entityId(value: number) {
    this._entityId = value;
  }

  get parentDeviceId(): number {
    return this._parentDeviceId;
  }

  set parentDeviceId(value: number) {
    this._parentDeviceId = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get additionalParams(): any {
    return this._additionalParams;
  }

  set additionalParams(value: any) {
    this._additionalParams = value;
  }

  get utilizeState(): string {
    return this._utilizeState;
  }

  set utilizeState(value: string) {
    this._utilizeState = value;
  }

  get offlineAlertState(): string {
    return this._offlineAlertState;
  }

  set offlineAlertState(value: string) {
    this._offlineAlertState = value;
  }

  get virtual(): boolean {
    return this._virtual;
  }

  set virtual(value: boolean) {
    this._virtual = value;
  }
}
