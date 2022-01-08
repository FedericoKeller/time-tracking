export class User {
  constructor(
    private email: string,
    private userId: string,
    private expirationDate: number,
  ) {}


  get id() {
    return this.userId;
  }

  get expDate() {
    return this.expirationDate;
  }

}
