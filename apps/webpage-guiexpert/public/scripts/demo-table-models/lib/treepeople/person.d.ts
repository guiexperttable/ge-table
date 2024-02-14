import { PersonIf } from "./person.if";
import { AddressIf } from "./address.if";
export declare class Person implements PersonIf {
    id: number;
    preName: string;
    lastName: string;
    birth: Date | string;
    age: number;
    gender: string;
    address: AddressIf;
    friends?: Person[] | undefined;
    constructor(id: number, preName: string, lastName: string, birth: Date | string, age: number, gender: string, address: AddressIf, friends?: Person[] | undefined);
}
