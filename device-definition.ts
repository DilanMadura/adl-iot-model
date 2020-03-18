export class DeviceDefinition {
  private _id: number;
  private _name: string;
  private _model: string;
  private _brand: string;
  private _type: string;
  private _parent: boolean;


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

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get parent(): boolean {
    return this._parent;
  }

  set parent(value: boolean) {
    this._parent = value;
  }
}
