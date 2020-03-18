import { DeviceConfigurationParameter } from './device-configuration-parameter';

export class DeviceConfiguration {
  private _id: number;
  private _name: string;
  private _deviceId: number;
  private _deviceName: string;
  private _entityId: number;
  private _deviceContextId: number;
  private _deviceContextName: string;
  private _offlineAlertState: string;
  private _deviceConfigurationParameters: DeviceConfigurationParameter;


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

  get deviceId(): number {
    return this._deviceId;
  }

  set deviceId(value: number) {
    this._deviceId = value;
  }

  get deviceName(): string {
    return this._deviceName;
  }

  set deviceName(value: string) {
    this._deviceName = value;
  }

  get entityId(): number {
    return this._entityId;
  }

  set entityId(value: number) {
    this._entityId = value;
  }

  get deviceContextId(): number {
    return this._deviceContextId;
  }

  set deviceContextId(value: number) {
    this._deviceContextId = value;
  }

  get deviceContextName(): string {
    return this._deviceContextName;
  }

  set deviceContextName(value: string) {
    this._deviceContextName = value;
  }

  get offlineAlertState(): string {
    return this._offlineAlertState;
  }

  set offlineAlertState(value: string) {
    this._offlineAlertState = value;
  }


  get deviceConfigurationParameters(): DeviceConfigurationParameter {
    return this._deviceConfigurationParameters;
  }

  set deviceConfigurationParameters(value: DeviceConfigurationParameter) {
    this._deviceConfigurationParameters = value;
  }
}
