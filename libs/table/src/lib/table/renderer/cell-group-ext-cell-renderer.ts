import { AreaModelIf } from '../data/tablemodel/areamodel/area-model.if';
import { CellRendererIf } from './cell-render.if';
import { DomServiceIf } from '../service/dom-service.if';
import { AreaIdent } from '../data/tablemodel/area-ident.type';
import { RendererCleanupFnType } from './renderer-cleanup-fn.type';
import { CellGroupExt } from '../data/tablemodel/cellgroup/cell-group-ext';
import { Simulate } from 'react-dom/test-utils';


export class CellGroupExtCellRenderer implements CellRendererIf {

  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    _areaModel: AreaModelIf,
    cellValue: CellGroupExt | undefined | null,
    _domService: DomServiceIf): RendererCleanupFnType | undefined {

    const label = cellValue?.data ? cellValue.data : '';

    let title = '';
    let action = '';
    let toggleIcon = '';
    if (cellValue) {
      const { toggle, visibility, closed } = cellValue;

      if (toggle && visibility !== 'always') {
        action = toggle ? 'toggleHeaderGroup' : '';
        if (closed) {
          toggleIcon = `⊖ `;
        } else {
          toggleIcon = `⊕ `;
        }
      }
      title = cellValue?.log();
    }

    cellDiv.innerHTML = `<span 
                data-ge-action="${action}"
                data-area="${areaIdent}"
                data-row-index="${rowIndex}"
                data-col-index="${columnIndex}"
                data-input-type="text"
                title="${title}">${toggleIcon}${label}</span>`;

    return undefined;
  }


}
