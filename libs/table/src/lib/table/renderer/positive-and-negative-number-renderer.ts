import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";


export class PositiveAndNegativeNumberRenderer implements CellRendererIf {


  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    _areaModel: AreaModelIf,
    cellValue: any,
    domService: DomServiceIf): RendererCleanupFnType | undefined {

    if (cellValue) {
      cellDiv.innerHTML = `
          <div 
            class="ge-table-label-div" 
            data-row-index=${rowIndex}" 
            data-col-index="${columnIndex}" 
            data-area="${areaIdent}" 
            style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div 
              class="ge-table-label"  
              data-row-index="${rowIndex}" 
              data-col-index="${columnIndex}" 
              data-area="${areaIdent}">${cellValue}</div></div>`;
      const n = Number(cellValue);
      if (n > 0) {
        domService.addClass(cellDiv, "ge-positive-text-color");

      } else if (n < 0) {
        domService.addClass(cellDiv, "ge-negative-text-color");
      }
    }
    return undefined;
  }

}

