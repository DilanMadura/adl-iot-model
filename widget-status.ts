import { WidgetType } from './widget-type';

export class WidgetStatus {
  private _id: number;
  private _name: string;
  private _other: string;
  private _formatter: string;
  private _widgetType: WidgetType;
  private _xValue: number;
  private _yValue: number;
  private _actionData: any;


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

  get formatter(): string {
    return this._formatter;
  }

  set formatter(value: string) {
    this._formatter = value;
  }

  get widgetType(): WidgetType {
    return this._widgetType;
  }

  set widgetType(value: WidgetType) {
    this._widgetType = value;
  }

  get xValue(): number {
    return this._xValue;
  }

  set xValue(value: number) {
    this._xValue = value;
  }

  get yValue(): number {
    return this._yValue;
  }

  set yValue(value: number) {
    this._yValue = value;
  }

  get actionData(): any {
    return this._actionData;
  }

  set actionData(value: any) {
    this._actionData = value;
  }
}
