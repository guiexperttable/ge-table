import { CellGroupIf } from "./cell-group.if";
import { CellGroup } from "./cell-group";
export declare class CellGroupExt extends CellGroup {
    rowIndex: number;
    childIndex: number;
    parent?: CellGroupExt | undefined;
    impl: string;
    children: CellGroupExt[] | undefined;
    leftNeighbour: CellGroupExt | undefined;
    rightNeighbour: CellGroupExt | undefined;
    constructor(cellGroup: CellGroupIf, rowIndex?: number, childIndex?: number, parent?: CellGroupExt | undefined);
    ownColumn(): boolean;
    toString(): string;
    getColumnIndex(): number;
    isVisible(): boolean;
    claimsSpace(): boolean;
    getColumnCount(cg?: CellGroupExt, ret?: number): number;
    getRowSpan(cg: CellGroupExt | undefined, maxRowCount: number): number;
    getParentCount(cg?: CellGroupExt, ret?: number): number;
    log(maxRowCount?: number): string;
}
