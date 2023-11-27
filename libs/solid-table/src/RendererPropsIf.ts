import { AreaIdent, AreaModelIf } from "@guiexpert/table";

// TODO
export interface RendererPropsIf {
  rowIndex: number;
  columnIndex: number;
  areaIdent: AreaIdent;
  areaModel: AreaModelIf;
  cellValue: any;
}
