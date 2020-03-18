export class Alert {
  private _id: number;
  private _name: string;
  private _internal: boolean;
  private _priority: string;
  private _sms: any;
  private _stateName: string;
  private _expressionEvaluationRequire: string;
  private _expressionString: string;
  private _alertCategory: string;
  private _alertType: string;
  private _alwaysOn: boolean;
  private _callbackEnable: boolean;
  private _connectedSceneId: number;
  private _defaultExpressionString: string;
  private _deviceConfigurationId: string;
  private _deviceId: number;
  private _email: any;
  private _executionInterval: number;
  private _expression: any;


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

  get internal(): boolean {
    return this._internal;
  }

  set internal(value: boolean) {
    this._internal = value;
  }

  get priority(): string {
    return this._priority;
  }

  set priority(value: string) {
    this._priority = value;
  }

  get sms(): any {
    return this._sms;
  }

  set sms(value: any) {
    this._sms = value;
  }

  get stateName(): string {
    return this._stateName;
  }

  set stateName(value: string) {
    this._stateName = value;
  }

  get expressionEvaluationRequire(): string {
    return this._expressionEvaluationRequire;
  }

  set expressionEvaluationRequire(value: string) {
    this._expressionEvaluationRequire = value;
  }

  get expressionString(): string {
    return this._expressionString;
  }

  set expressionString(value: string) {
    this._expressionString = value;
  }

  get alertCategory(): string {
    return this._alertCategory;
  }

  set alertCategory(value: string) {
    this._alertCategory = value;
  }

  get alertType(): string {
    return this._alertType;
  }

  set alertType(value: string) {
    this._alertType = value;
  }

  get alwaysOn(): boolean {
    return this._alwaysOn;
  }

  set alwaysOn(value: boolean) {
    this._alwaysOn = value;
  }

  get callbackEnable(): boolean {
    return this._callbackEnable;
  }

  set callbackEnable(value: boolean) {
    this._callbackEnable = value;
  }

  get connectedSceneId(): number {
    return this._connectedSceneId;
  }

  set connectedSceneId(value: number) {
    this._connectedSceneId = value;
  }

  get defaultExpressionString(): string {
    return this._defaultExpressionString;
  }

  set defaultExpressionString(value: string) {
    this._defaultExpressionString = value;
  }

  get deviceConfigurationId(): string {
    return this._deviceConfigurationId;
  }

  set deviceConfigurationId(value: string) {
    this._deviceConfigurationId = value;
  }

  get deviceId(): number {
    return this._deviceId;
  }

  set deviceId(value: number) {
    this._deviceId = value;
  }

  get email(): any {
    return this._email;
  }

  set email(value: any) {
    this._email = value;
  }

  get executionInterval(): number {
    return this._executionInterval;
  }

  set executionInterval(value: number) {
    this._executionInterval = value;
  }

  get expression(): any {
    return this._expression;
  }

  set expression(value: any) {
    this._expression = value;
  }
}
