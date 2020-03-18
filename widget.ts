import { WidgetParameters } from './widget-parameters';
import { WidgetType } from './widget-type';

export class Widget {
  private _id: number;
  private _name: string;
  private _other: string;
  private _parentWidgetId: number;
  private _widgetType: WidgetType;
  private _widgetParameters: WidgetParameters;
  private _widgetTypeId: number;
  private _x: number;
  private _y: number;
  private _entityId: number;
  private _hidden: boolean;


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

  get other(): string {
    return this._other;
  }

  set other(value: string) {
    this._other = value;
  }

  get parentWidgetId(): number {
    return this._parentWidgetId;
  }

  set parentWidgetId(value: number) {
    this._parentWidgetId = value;
  }

  get widgetType(): WidgetType {
    return this._widgetType;
  }

  set widgetType(value: WidgetType) {
    this._widgetType = value;
  }

  get widgetParameters(): WidgetParameters {
    return this._widgetParameters;
  }

  set widgetParameters(value: WidgetParameters) {
    this._widgetParameters = value;
  }

  get widgetTypeId(): number {
    return this._widgetTypeId;
  }

  set widgetTypeId(value: number) {
    this._widgetTypeId = value;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  get entityId(): number {
    return this._entityId;
  }

  set entityId(value: number) {
    this._entityId = value;
  }

  get hidden(): boolean {
    return this._hidden;
  }

  set hidden(value: boolean) {
    this._hidden = value;
  }
}
