import {AreaIdent, AreaModelIf, RendererCleanupFnType} from "@guiexpert/table";

export interface ComponentRendererIf<T> {

  setData(
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    cellValue: any): RendererCleanupFnType | undefined;

}
