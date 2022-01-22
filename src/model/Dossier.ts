export class Dossier {
  private _id: number;
  private _name: string;
  private _phoneNumber: number;
  private _eMail: string;
  private _dateOfBirth: Date;
  private _locality: string;
  private _country: string;
  private _province: string;
  private _nationality: string;

  constructor(id: number, name: string, phoneNumber: number, eMail: string, dateOfBirth: Date, locality: string, country: string, province: string, nationality: string) {
    this._id = id;
    this._name = name;
    this._phoneNumber = phoneNumber;
    this._eMail = eMail;
    this._dateOfBirth = dateOfBirth;
    this._locality = locality;
    this._country = country;
    this._province = province;
    this._nationality = nationality;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phoneNumber(): number {
    return this._phoneNumber;
  }

  set phoneNumber(value: number) {
    this._phoneNumber = value;
  }

  get eMail(): string {
    return this._eMail;
  }

  set eMail(value: string) {
    this._eMail = value;
  }

  get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: Date) {
    this._dateOfBirth = value;
  }

  get locality(): string {
    return this._locality;
  }

  set locality(value: string) {
    this._locality = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get province(): string {
    return this._province;
  }

  set province(value: string) {
    this._province = value;
  }

  get nationality(): string {
    return this._nationality;
  }

  set nationality(value: string) {
    this._nationality = value;
  }
}
