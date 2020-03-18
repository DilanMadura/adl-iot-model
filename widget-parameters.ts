import { EventParameters } from './event-parameters';

export class WidgetParameters {
  private _id: number;
  private _unitName: string;
  private _widgetId: number;
  private _dataType: string;
  private _deviceConfigurationId: number;
  private _deviceConfigurationParameterId: number;
  private _deviceContextParameterId: number;
  private _deviceContextParameterName: string;
  private _eventParameter: EventParameters;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get unitName(): string {
    return this._unitName;
  }

  set unitName(value: string) {
    this._unitName = value;
  }

  get widgetId(): number {
    return this._widgetId;
  }

  set widgetId(value: number) {
    this._widgetId = value;
  }

  get dataType(): string {
    return this._dataType;
  }

  set dataType(value: string) {
    this._dataType = value;
  }

  get deviceConfigurationId(): number {
    return this._deviceConfigurationId;
  }

  set deviceConfigurationId(value: number) {
    this._deviceConfigurationId = value;
  }

  get deviceConfigurationParameterId(): number {
    return this._deviceConfigurationParameterId;
  }

  set deviceConfigurationParameterId(value: number) {
    this._deviceConfigurationParameterId = value;
  }

  get deviceContextParameterId(): number {
    return this._deviceContextParameterId;
  }

  set deviceContextParameterId(value: number) {
    this._deviceContextParameterId = value;
  }

  get deviceContextParameterName(): string {
    return this._deviceContextParameterName;
  }

  set deviceContextParameterName(value: string) {
    this._deviceContextParameterName = value;
  }

  get eventParameter(): EventParameters {
    return this._eventParameter;
  }

  set eventParameter(value: EventParameters) {
    this._eventParameter = value;
  }
}
