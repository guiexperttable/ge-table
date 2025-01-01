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
    cellValue: any,
    domService: DomServiceIf
  ): RendererCleanupFnType | undefined {
    domService.addClass(cellDiv, 'ge-table-row-action-div');

    //const cellValue = areaModel.getValueAt(rowIndex, columnIndex);
    const id = cellValue;
    const crudActions = this.getCrudActions(cellValue);

    const htmlParts: string[] = crudActions.map(action =>
      action.elementType === 'button'
        ? this.buildButtonHtml(action, areaIdent, rowIndex, columnIndex, id)
        : this.buildLinkHtml(action, areaIdent, rowIndex, columnIndex, id)
    );

    cellDiv.innerHTML = htmlParts.join('');

    this.addClickEventListeners(cellDiv, areaIdent, areaModel);

    return undefined;
  }

  private buildButtonHtml(
    action: CrudAction,
    areaIdent: AreaIdent,
    rowIndex: number,
    columnIndex: number,
    id:any
  ): string {
    const isEnabled = action.enabled ? `data-listen="click"` : `disabled`;
    return `
    <button
      type="button"
      data-area="${areaIdent}"
      data-action="${action.action}"
      data-id="${id}"
      data-row-index="${rowIndex}"
      data-col-index="${columnIndex}"
      style="height: 100%;line-height: 1;"
      ${isEnabled}
      class="ge-table-cell-action ge-table-cell-button ${action.elementClass}">
      ${action.label}
    </button>`;
  }

  private buildLinkHtml(
    action: CrudAction,
    areaIdent: AreaIdent,
    rowIndex: number,
    columnIndex: number,
    id:any
  ): string {
    const isEnabled = action.enabled ? `data-listen="click"` : `disabled`;
    return `
    <a
      href="javascript:void(0)"
      data-area="${areaIdent}"
      data-action="${action.action}"
      data-id="${id}"
      data-row-index="${rowIndex}"
      data-col-index="${columnIndex}"
      ${isEnabled}
      class="ge-table-cell-action ge-table-cell-link ${action.elementClass}">
      ${action.label}
    </a>`;
  }

  private addClickEventListeners(
    cellDiv: HTMLDivElement,
    _areaIdent: AreaIdent,
    areaModel: AreaModelIf
  ): void {
    const buttons = cellDiv.querySelectorAll<HTMLButtonElement>('.ge-table-cell-action');
    buttons.forEach(button => {
      button.addEventListener('click', (evt: MouseEvent) => {
        const target = evt.target as HTMLButtonElement | null;
        if (target) {
          const actionEvent = this.createActionEvent(target, areaModel);
          if (actionEvent) {
            this.actionEventListener.onActionEvent(actionEvent);
          }
        }
      });
    });
  }

  private createActionEvent(
    target: HTMLButtonElement,
    areaModel: AreaModelIf
  ): ActionEvent | null {
    const areaIdentStr = target.getAttribute('data-area');
    const rowIndexStr = target.getAttribute('data-row-index');
    const columnIndexStr = target.getAttribute('data-col-index');
    const action = target.getAttribute('data-action') ?? 'unknown';
    const id = target.getAttribute('data-id') ?? 'unknown';

    if (areaIdentStr && rowIndexStr && columnIndexStr) {
      const area: AreaIdent = getAreaIdentByString(areaIdentStr);
      const rowIndex = Number(rowIndexStr);
      const columnIndex = Number(columnIndexStr);
      return new ActionEvent(action, area, areaModel, rowIndex, columnIndex, id);
    }

    return null;
  }


  private getCrudActions(val: any): CrudAction[] {
    return Array.isArray(val) && val.every((item) => item instanceof CrudAction)
      ? val
      : this.crudActions;
  }

}
