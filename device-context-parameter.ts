export class DeviceContextParameter {
  private _id: number;
  private _name: string;
  private _subParameters: any;


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

  get subParameters(): any {
    return this._subParameters;
  }

  set subParameters(value: any) {
    this._subParameters = value;
  }
}
