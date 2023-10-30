import { AreaIdent } from "../tablemodel/area-ident.type";
import { SideIdent } from "../side-ident.type";
import { AreaModelIf } from "../tablemodel/areamodel/area-model.if";
import { GeoData } from "../geo-data";

export interface ArgsAdjustColumnsToRowParentParams {
  areaIdent: AreaIdent;
  sideIdent: SideIdent;
  areaModel: AreaModelIf;
  geo: GeoData;
  parent: HTMLDivElement;
  rowIndex: number;
  columnIndexStart: number;
  columnIndexEnd: number;
  verticalFixed?: boolean;
  lastRowOfModel?: boolean;
}
