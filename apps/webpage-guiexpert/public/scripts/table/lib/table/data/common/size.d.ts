import { SizeIf } from "./size.if";
import { SizeUnitType } from './size-unit.type';
export declare class Size implements SizeIf {
    value: number;
    unit: SizeUnitType;
    constructor(value?: number, unit?: SizeUnitType);
}
