import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";


export class UsdRenderer implements CellRendererIf {

  private formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });


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
      cellDiv.innerText = this.formatter.format(n);
    }
    return undefined;
  }

}

