import { CellRendererIf } from '../cell-render.if';
import { AreaIdent, getAreaIdentByString } from '../../data/tablemodel/area-ident.type';
import { AreaModelIf } from '../../data/tablemodel/areamodel/area-model.if';
import { DomServiceIf } from '../../service/dom-service.if';
import { RendererCleanupFnType } from '../renderer-cleanup-fn.type';
import { ActionEventListenerIf } from './action-event-listener.if';
import { ActionEvent } from './action-event';
import { CrudAction } from '../../crud/crud-action';


export class ActionsCellRenderer implements CellRendererIf {


  constructor(
    private actionEventListener: ActionEventListenerIf,
    private crudActions: CrudAction[]
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
    const sb: string[] = [];
    for (const action of this.crudActions) {
      if (action.elementType === 'button') {
        sb.push(`
            <button
                type="button"
                data-area="${areaIdent}"
                data-action="${action.action}"
                data-row-index="${rowIndex}"
                data-col-index="${columnIndex}"
                style="height: 100%;line-height: 1;" `);
        if (action.enabled) {
          sb.push(` data-listen="click" `);
        } else {
          sb.push(` disabled `);
        }
        sb.push(` class="ge-table-cell-action ge-table-cell-button ${action.elementClass}">${action.label}</button>`);

      } else {
        // link:
        sb.push(`
            <a
                href="javascript:void(0)"
                data-area="${areaIdent}"
                data-action="${action.action}"
                data-row-index="${rowIndex}"
                data-col-index="${columnIndex}" `);
        if (action.enabled) {
          sb.push(` data-listen="click" `);
        } else {
          sb.push(` disabled `);
        }
        sb.push(` class="ge-table-cell-action ge-table-cell-link ${action.elementClass}">${action.label}</a>`);
      }
    }
    cellDiv.innerHTML = sb.join('');

    const buttons = cellDiv.querySelectorAll<HTMLButtonElement>('.ge-table-cell-action');
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
          }
        });
      });
    }
    return undefined;
  }

}
