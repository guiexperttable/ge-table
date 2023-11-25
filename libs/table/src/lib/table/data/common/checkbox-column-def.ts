import { Size } from "./size";
import { SizeIf } from "./size.if";
import { ColumnDefIf } from "../tablemodel/column/column-def.if";
import { CellRendererIf } from "../../renderer/cell-render.if";
import { CheckboxCellRenderer } from "../../renderer/checkbox-cell-renderer";
import { AreaObjectMapType } from "./area-map.type";
import { AreaObjectMap } from "./area-map";

export class CheckboxColumnDef implements ColumnDefIf {

  public type = 'CheckboxColumnDef';

  public property = "CheckboxColumn";
  public headerLabel = "";
  public width: SizeIf = new Size(50, "px");
  public minWidth: SizeIf = new Size(50, "px");
  public maxWidth: SizeIf = new Size(100, "px");
  public rendererMap: AreaObjectMapType<CellRendererIf> = new AreaObjectMap<CellRendererIf>(new CheckboxCellRenderer(), new CheckboxCellRenderer(), undefined);
  public classes: AreaObjectMapType<string[]> = new AreaObjectMap<string[]>(
    [],
    ["ge-table-text-align-left"],
    []
  );


}
