import { AddressIf } from "./address.if";

export class Address implements AddressIf {

  constructor(
    public street: string,
    public number: string,
    public zip: string,
    public city: string,
    public country: string
  ) {
  }

}
