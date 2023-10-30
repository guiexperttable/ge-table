import { CellGroupIf } from "./cell-group.if";
import { ColumnDefIf } from "../column/column-def.if";
import { CellGroupExt } from "./cell-group-ext";
export declare class CellgroupFactory {
    static buildColumnDefs(cellGroups: CellGroupIf[], ret?: ColumnDefIf[]): ColumnDefIf[];
    static buildGroupExts(cellGroups: CellGroupIf[], ret?: CellGroupExt[], deep?: number, parent?: CellGroupExt): CellGroupExt[];
    static flattenGroupExts(cellGroups: CellGroupExt[], ret?: CellGroupExt[]): CellGroupExt[];
    static buildArrayOfArrays(flatten: CellGroupExt[], arrs: (CellGroupExt | null | undefined)[][]): (CellGroupExt | null | undefined)[][];
    static iterateThrowColumns(sb: string[] | undefined, cellGroups: CellGroupExt[]): void;
}
