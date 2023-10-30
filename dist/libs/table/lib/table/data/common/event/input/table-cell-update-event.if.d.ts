import { AreaIdent } from "../../../tablemodel/area-ident.type";
export interface TableCellUpdateEventIf {
    area: AreaIdent;
    rowIndex: number;
    columnIndex: number;
    value: any;
}
