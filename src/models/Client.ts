export default class ClientModel {
  constructor(
    public fullName: string = "",
    public email: string = "",
    public message: string = "",
    public id?: string
  ) {}
}
