import { DefaultRowHeightsIf } from "./default-row-heights.if";
export declare class DefaultRowHeights implements DefaultRowHeightsIf {
    header: number;
    body: number;
    footer: number;
    constructor(header?: number, body?: number, footer?: number);
}
