export class Entity {
  private _id: number;
  private _name: string;
  private _location: string;
  private _telephone: string;
  private _description: string;
  private _parentEntityId: number;
  private _entityTypeId: number;
  private _childEntities: any;


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

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get parentEntityId(): number {
    return this._parentEntityId;
  }

  set parentEntityId(value: number) {
    this._parentEntityId = value;
  }

  get entityTypeId(): number {
    return this._entityTypeId;
  }

  set entityTypeId(value: number) {
    this._entityTypeId = value;
  }

  get childEntities(): any {
    return this._childEntities;
  }

  set childEntities(value: any) {
    this._childEntities = value;
  }
}
