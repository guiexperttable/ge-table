import { CellRendererIf } from '../cell-render.if';
import { AreaIdent, getAreaIdentByString } from '../../data/tablemodel/area-ident.type';
import { AreaModelIf } from '../../data/tablemodel/areamodel/area-model.if';
import { DomServiceIf } from '../../service/dom-service.if';
import { RendererCleanupFnType } from '../renderer-cleanup-fn.type';
import { ActionEventListenerIf } from './action-event-listener.if';
import { ActionEvent } from './action-event';


export class ButtonCellRenderer implements CellRendererIf {


  constructor(
    private actionEventListener: ActionEventListenerIf,
    private label: string,
    private action: string
  ) {
  }

  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    _cellValue: any,
    domService: DomServiceIf): RendererCleanupFnType | undefined {


    domService.addClass(cellDiv, 'ge-table-row-button-div');

    const val = areaModel.getValueAt(rowIndex, columnIndex);
    cellDiv.innerHTML = `
            <button
                type="button"
                data-listen="click"
                data-area="${areaIdent}"
                data-action="${this.action}"
                data-row-index="${rowIndex}"
                data-col-index="${columnIndex}"
                data-input-type="text"
                style="height: 100%;line-height: 1;"
                class="ge-table-cell-button">${this.label}</button>`;

    const buttons = cellDiv.querySelectorAll<HTMLButtonElement>('.ge-table-cell-button');
    if (buttons?.length) {
      buttons.forEach((button) => {
        button.addEventListener('click', (evt: MouseEvent) => {
          const target = evt.target as HTMLButtonElement | null;
          if (target) {
            const areaIdentStr = target.getAttribute('data-area');
            const rowIndexStr = target.getAttribute('data-row-index');
            const columnIndexStr = target.getAttribute('data-col-index');
            const action = target.getAttribute('data-action') ?? 'unknown';

            if (areaIdentStr && rowIndexStr && columnIndexStr) {
              const area: AreaIdent = getAreaIdentByString(areaIdentStr);
              const rowIndex = Number(rowIndexStr);
              const columnIndex = Number(columnIndexStr);

              const evt = new ActionEvent(
                action, area, rowIndex, columnIndex
              );
              this.actionEventListener.onActionEvent(evt);

            }

            console.info(`Button clicked:`, { target, evt });
          }
        });
      });
    }
    return undefined;
  }

}
