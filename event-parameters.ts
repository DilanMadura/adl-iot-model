export class EventParameters {
  private _id: number;
  private _name: string;
  private _type: string;
  private _eventId: number;
  private _mappedName: string;

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

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get eventId(): number {
    return this._eventId;
  }

  set eventId(value: number) {
    this._eventId = value;
  }

  get mappedName(): string {
    return this._mappedName;
  }

  set mappedName(value: string) {
    this._mappedName = value;
  }
}
