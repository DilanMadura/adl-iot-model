export class DeviceConfigurationParameter {
  private _id: number;
  private _name: string;
  private _parameterType: string;
  private _eventParameterId: number;
  private _deviceConfigurationId: number;
  private _deviceContextParam: any;


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

  get parameterType(): string {
    return this._parameterType;
  }

  set parameterType(value: string) {
    this._parameterType = value;
  }

  get eventParameterId(): number {
    return this._eventParameterId;
  }

  set eventParameterId(value: number) {
    this._eventParameterId = value;
  }

  get deviceConfigurationId(): number {
    return this._deviceConfigurationId;
  }

  set deviceConfigurationId(value: number) {
    this._deviceConfigurationId = value;
  }

  get deviceContextParam(): any {
    return this._deviceContextParam;
  }

  set deviceContextParam(value: any) {
    this._deviceContextParam = value;
  }
}
