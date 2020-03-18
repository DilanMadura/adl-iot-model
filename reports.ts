export class Reports {
  private _filename: string;
  private _file: any;
  private _description: string;
  private _inputStream: any;
  private _open: boolean;
  private _readable: boolean;
  private _uri: any;
  private _url: any;


  get filename(): string {
    return this._filename;
  }

  set filename(value: string) {
    this._filename = value;
  }

  get file(): any {
    return this._file;
  }

  set file(value: any) {
    this._file = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get inputStream(): any {
    return this._inputStream;
  }

  set inputStream(value: any) {
    this._inputStream = value;
  }

  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
  }

  get readable(): boolean {
    return this._readable;
  }

  set readable(value: boolean) {
    this._readable = value;
  }

  get uri(): any {
    return this._uri;
  }

  set uri(value: any) {
    this._uri = value;
  }

  get url(): any {
    return this._url;
  }

  set url(value: any) {
    this._url = value;
  }
}
