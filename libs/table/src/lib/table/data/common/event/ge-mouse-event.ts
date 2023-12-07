import { AreaIdent } from "../../tablemodel/area-ident.type";
import { SideIdent } from "../../side-ident.type";

/**
 * Represents a mouse event in the table.
 */
export class GeMouseEvent {


  constructor(
    public rowIndex: number = -1,
    public rowTop: number = -1,
    public columnIndex: number = -1,
    public columnLeft: number = -1,
    public areaIdent?: AreaIdent,
    public sideIdent?: SideIdent,
    public originalEvent?: MouseEvent,
    public clickCount: number = 0,
    public draggingX: number = 0,
    public draggingY: number = 0,
    public action: string | null = ""
  ) {
  }

  clone(): GeMouseEvent {
    return new GeMouseEvent(
      this.rowIndex,
      this.rowTop,
      this.columnIndex,
      this.columnLeft,
      this.areaIdent,
      this.sideIdent,
      this.originalEvent,
      this.clickCount,
      this.draggingX,
      this.draggingY,
      this.action
    );
  }

}
