import { TableCellUpdateEventIf } from "./table-cell-update-event.if";
import { AreaIdent } from "../../../tablemodel/area-ident.type";

export class TableCellUpdateEvent implements TableCellUpdateEventIf {

  constructor(
    public area: AreaIdent,
    public rowIndex: number,
    public columnIndex: number,
    public value: any
  ) {
  }

}
