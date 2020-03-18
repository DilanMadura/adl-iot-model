import { EventParameters } from './event-parameters';

export class Event {
  private _id: number;
  private _name: string;
  private _deviceDefinitionId: number;
  private _eventParameters: EventParameters;
  private _eventStatuses: any;


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

  get deviceDefinitionId(): number {
    return this._deviceDefinitionId;
  }

  set deviceDefinitionId(value: number) {
    this._deviceDefinitionId = value;
  }

  get eventParameters(): EventParameters {
    return this._eventParameters;
  }

  set eventParameters(value: EventParameters) {
    this._eventParameters = value;
  }

  get eventStatuses(): any {
    return this._eventStatuses;
  }

  set eventStatuses(value: any) {
    this._eventStatuses = value;
  }
}
