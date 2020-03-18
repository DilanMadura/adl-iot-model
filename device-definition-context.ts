export class DeviceDefinitionContext {
  private _id: number;
  private _name: string;
  private _autoConfig: boolean;
  private _deviceContextId: number;
  private _deviceDefinitionId: number;


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

  get autoConfig(): boolean {
    return this._autoConfig;
  }

  set autoConfig(value: boolean) {
    this._autoConfig = value;
  }

  get deviceContextId(): number {
    return this._deviceContextId;
  }

  set deviceContextId(value: number) {
    this._deviceContextId = value;
  }

  get deviceDefinitionId(): number {
    return this._deviceDefinitionId;
  }

  set deviceDefinitionId(value: number) {
    this._deviceDefinitionId = value;
  }
}
