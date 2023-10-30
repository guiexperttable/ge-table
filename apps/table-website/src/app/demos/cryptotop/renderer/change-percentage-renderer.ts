import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";


export class ChangePercentageRenderer implements CellRendererIf {


  render(
    cellDiv: HTMLDivElement,
    _rowIndex: number,
    _columnIndex: number,
    _areaIdent: AreaIdent,
    _areaModel: AreaModelIf,
    cellValue: any,
    domService: DomServiceIf): RendererCleanupFnType | undefined {

    if (cellValue) {
      const n = Number(cellValue);
      if (n < 0) {
        cellDiv.innerHTML = "▾ " + n.toFixed(2) + "%";
        domService.addClass(cellDiv, "ge-positive-text-color");
      } else {
        cellDiv.innerHTML = "▴ " + n.toFixed(2) + "%";
        domService.addClass(cellDiv, "ge-negative-text-color");
      }
    }
    return undefined;
  }

}

