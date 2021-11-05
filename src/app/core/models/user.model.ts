export class User {
  constructor(
    public id: string,
    private _token: string,
    public tokenExpirationDate: Date,
  ) {}

  get token() {
    if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
      return null;
    }
    // eslint-disable-next-line no-underscore-dangle
    return this._token;
  }

  get tokenDuration() {
    if (!this.token) {
      return 0;
    }
    // return 2000;
    return this.tokenExpirationDate.getTime() - new Date().getTime();
  }
}
