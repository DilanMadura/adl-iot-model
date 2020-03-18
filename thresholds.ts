export class Thresholds {
  private _id: number;
  private _lowThreshold: number;
  private _lowThresholdTriggerInterval: number;
  private _parentDeviceContextParamId: number;
  private _priority: string;
  private _subDeviceContextParamId: string;
  private _userIds: number[];
  private _alertType: string;
  private _deviceConfigurationId: number;
  private _enable: boolean;
  private _enableAlertStatus: boolean;
  private _enableTriggerInterval: boolean;
  private _highThreshold: number;
  private _highThresholdTriggerInterval: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get lowThreshold(): number {
    return this._lowThreshold;
  }

  set lowThreshold(value: number) {
    this._lowThreshold = value;
  }

  get lowThresholdTriggerInterval(): number {
    return this._lowThresholdTriggerInterval;
  }

  set lowThresholdTriggerInterval(value: number) {
    this._lowThresholdTriggerInterval = value;
  }

  get parentDeviceContextParamId(): number {
    return this._parentDeviceContextParamId;
  }

  set parentDeviceContextParamId(value: number) {
    this._parentDeviceContextParamId = value;
  }

  get priority(): string {
    return this._priority;
  }

  set priority(value: string) {
    this._priority = value;
  }

  get subDeviceContextParamId(): string {
    return this._subDeviceContextParamId;
  }

  set subDeviceContextParamId(value: string) {
    this._subDeviceContextParamId = value;
  }

  get userIds(): number[] {
    return this._userIds;
  }

  set userIds(value: number[]) {
    this._userIds = value;
  }

  get alertType(): string {
    return this._alertType;
  }

  set alertType(value: string) {
    this._alertType = value;
  }

  get deviceConfigurationId(): number {
    return this._deviceConfigurationId;
  }

  set deviceConfigurationId(value: number) {
    this._deviceConfigurationId = value;
  }

  get enable(): boolean {
    return this._enable;
  }

  set enable(value: boolean) {
    this._enable = value;
  }

  get enableAlertStatus(): boolean {
    return this._enableAlertStatus;
  }

  set enableAlertStatus(value: boolean) {
    this._enableAlertStatus = value;
  }

  get enableTriggerInterval(): boolean {
    return this._enableTriggerInterval;
  }

  set enableTriggerInterval(value: boolean) {
    this._enableTriggerInterval = value;
  }

  get highThreshold(): number {
    return this._highThreshold;
  }

  set highThreshold(value: number) {
    this._highThreshold = value;
  }

  get highThresholdTriggerInterval(): number {
    return this._highThresholdTriggerInterval;
  }

  set highThresholdTriggerInterval(value: number) {
    this._highThresholdTriggerInterval = value;
  }
}
