import { AreaModelObjectyArray } from "./area-model-object-array";
import { ColumnDefIf } from "../column/column-def.if";
import { AreaIdent } from "../area-ident.type";
export declare class AreaModelObjectArrayWithColumndefs<T> extends AreaModelObjectyArray<T> {
    areaIdent: AreaIdent;
    protected readonly rows: T[];
    protected readonly columnDefs: ColumnDefIf[];
    defaultRowHeight: number;
    constructor(areaIdent: AreaIdent, rows: T[], columnDefs: ColumnDefIf[], defaultRowHeight: number);
}
