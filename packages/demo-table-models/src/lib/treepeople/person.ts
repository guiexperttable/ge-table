import { PersonIf } from "./person.if";
import { AddressIf } from "./address.if";

export class Person implements PersonIf {

  constructor(
    public id: number,
    public preName: string,
    public lastName: string,
    public birth: Date | string,
    public age: number,
    public gender: string,
    public address: AddressIf,
    public friends?: Person[]
  ) {
  }

}
