import { NotificationType } from './notification-type';

export class Notification {
  private _id: number;
  private _name: string;
  private _type: string;
  private _sms: any;
  private _notificationType: NotificationType;
  private _email: any;
  private _userIds: number[];
  private _deviceConfiguration: any;


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

  get sms(): any {
    return this._sms;
  }

  set sms(value: any) {
    this._sms = value;
  }

  get notificationType(): NotificationType {
    return this._notificationType;
  }

  set notificationType(value: NotificationType) {
    this._notificationType = value;
  }

  get email(): any {
    return this._email;
  }

  set email(value: any) {
    this._email = value;
  }

  get userIds(): number[] {
    return this._userIds;
  }

  set userIds(value: number[]) {
    this._userIds = value;
  }

  get deviceConfiguration(): any {
    return this._deviceConfiguration;
  }

  set deviceConfiguration(value: any) {
    this._deviceConfiguration = value;
  }
}
