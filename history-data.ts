export class HistoryData {
  private _deviceConfigurationId: number;
  private _deviceConfigurationName: string;
  private _message: string;
  private _dataList: any;


  get deviceConfigurationId(): number {
    return this._deviceConfigurationId;
  }

  set deviceConfigurationId(value: number) {
    this._deviceConfigurationId = value;
  }

  get deviceConfigurationName(): string {
    return this._deviceConfigurationName;
  }

  set deviceConfigurationName(value: string) {
    this._deviceConfigurationName = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get dataList(): any {
    return this._dataList;
  }

  set dataList(value: any) {
    this._dataList = value;
  }
}
