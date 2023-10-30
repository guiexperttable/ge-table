import { AreaIdent, AreaModelIf, CellRendererIf, RendererCleanupFnType } from "@guiexpert/table";
import { DomService } from "@guiexpert/angular-table";

export class DemoStyleColorCellRenderer implements CellRendererIf {


  render<T>(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    _areaIdent: AreaIdent,
    _areaModel: AreaModelIf,
    _cellValue: any,
    domService: DomService): RendererCleanupFnType | undefined {

    domService.setStyle(cellDiv, "background", `rgb(${rowIndex % 255},${columnIndex % 255},${this.c(rowIndex, columnIndex)}`);
    domService.appendText(cellDiv, this.text(rowIndex, columnIndex));
    return undefined;
  }

  private c(
    rowIndex: number,
    columnIndex: number
  ) {
    return (rowIndex + columnIndex) % 2 ? 255 : 0;
  }

  private text(
    rowIndex: number,
    columnIndex: number
  ) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return characters[(rowIndex + columnIndex) % characters.length];
  }

}
