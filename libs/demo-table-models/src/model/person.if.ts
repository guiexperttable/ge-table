import { AddressIf } from "./address.if";

export interface PersonIf {
  id: number;
  preName: string;
  lastName: string;
  birth: Date | string;
  age: number;
  gender: string;
  address: AddressIf;
  friends?: PersonIf[];
}
