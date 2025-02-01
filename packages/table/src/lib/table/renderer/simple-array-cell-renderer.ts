import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { CellRendererIf } from "./cell-render.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";


export class SimpleArrayCellRenderer implements CellRendererIf {

  render(
    cellDiv: HTMLDivElement,
    _rowIndex: number,
    _columnIndex: number,
    _areaIdent: AreaIdent,
    _areaModel: AreaModelIf,
    cellValue: any[],
    domService: DomServiceIf): RendererCleanupFnType | undefined {
    if (cellValue?.length) {
      const div = domService.createElement<HTMLDivElement>("div");
      domService.addClass(div, 'ge-table-label-div');
      domService.appendChild(cellDiv, div);

      const divInner = domService.createElement<HTMLDivElement>("div");
      domService.addClass(divInner, 'ge-table-label');
      domService.appendChild(div, divInner);

      const textElement = domService.createText(cellValue.join(', '));
      domService.appendChild(divInner, textElement);
    } else {
      cellDiv.innerText = '';
    }
    return undefined;
  }

}
