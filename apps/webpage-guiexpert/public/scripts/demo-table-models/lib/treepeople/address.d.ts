import { AddressIf } from "./address.if";
export declare class Address implements AddressIf {
    street: string;
    number: string;
    zip: string;
    city: string;
    country: string;
    constructor(street: string, number: string, zip: string, city: string, country: string);
}
