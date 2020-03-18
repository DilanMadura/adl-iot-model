export class DeviceAction {
  private _actionExecutor: string;
  private _actionName: string;
  private _actionTypeName: string;
  private _deviceConfigId: number;


  get actionExecutor(): string {
    return this._actionExecutor;
  }

  set actionExecutor(value: string) {
    this._actionExecutor = value;
  }

  get actionName(): string {
    return this._actionName;
  }

  set actionName(value: string) {
    this._actionName = value;
  }

  get actionTypeName(): string {
    return this._actionTypeName;
  }

  set actionTypeName(value: string) {
    this._actionTypeName = value;
  }

  get deviceConfigId(): number {
    return this._deviceConfigId;
  }

  set deviceConfigId(value: number) {
    this._deviceConfigId = value;
  }
}
