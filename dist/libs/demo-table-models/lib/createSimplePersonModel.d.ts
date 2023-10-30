import { CellRendererIf, ColumnDefIf, TableModelIf, TableOptions } from "@guiexpert/table";
export interface SimplePersonIf {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    ipAddress: string;
}
export declare function createTableRows(): SimplePersonIf[];
export declare function createColumnDefs(): ColumnDefIf[];
export declare function createTableOptions(): TableOptions;
export declare function createSimplePersonModel(): TableModelIf;
export declare function applyBodyRenderer(columnDef: ColumnDefIf, bodyRenderer: CellRendererIf): void;
