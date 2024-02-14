import { SizeIf } from "./size.if";
export declare class Size implements SizeIf {
    value: number;
    unit: "px" | "%";
    constructor(value?: number, unit?: "px" | "%");
}
