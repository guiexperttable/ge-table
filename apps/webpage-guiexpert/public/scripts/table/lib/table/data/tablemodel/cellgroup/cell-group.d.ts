import { CellGroupIf } from "./cell-group.if";
export declare class CellGroup implements CellGroupIf {
    data: any;
    property?: string | undefined;
    toggle?: boolean | undefined;
    closed: boolean;
    visibility: "always" | "inverted" | "normal" | undefined;
    children: CellGroupIf[] | undefined;
    impl: string;
    constructor(data: any, property?: string | undefined, toggle?: boolean | undefined, closed?: boolean, visibility?: "always" | "inverted" | "normal" | undefined, children?: CellGroupIf[] | undefined);
}
