import { GeMouseEvent } from "../data/common/event/ge-mouse-event";
import { TableScope } from "../table-scope";
import { GetT } from "../data/common/get-t";
import { SelectionModelIf } from "./selection-model.if";
import { FocusModelIf } from "../focus/focus-model.if";
import { CellRange } from "../data/common/cell-range";
import { OnActionTriggeredIf } from "../action/on-action-triggered.if";
import { ActionId } from "../action/action-id.type";


export class SelectionService implements OnActionTriggeredIf {

  getSelectionModel?: GetT<SelectionModelIf>;
  getFocusModel?: GetT<FocusModelIf>;
  protected previousEvt?: GeMouseEvent;


  constructor(
    protected readonly tableScope: TableScope
  ) {
    if (this.tableScope.tableOptions?.getSelectionModel) {
      this.getSelectionModel = this.tableScope.tableOptions.getSelectionModel;
    }
    if (this.tableScope.tableOptions?.getFocusModel) {
      this.getFocusModel = this.tableScope.tableOptions.getFocusModel;
    }
  }


  onMouseClicked(evt: GeMouseEvent, _previousEvt: GeMouseEvent | undefined): boolean {
    let dirty = false;
    let deletePreviousEvent = false;

    if (this.getSelectionModel && this.getFocusModel) {
      const sm = this.getSelectionModel();
      const fm = this.getFocusModel();
      if (sm && fm) {

        // Focus:
        if (!fm.hasFocus(evt.rowIndex, evt.columnIndex)) {
          fm.setFocus(evt.rowIndex, evt.columnIndex);
          this.tableScope.onFocusChanged(fm);
          dirty = true;
        }

        // Selection:
        if (!evt.originalEvent?.shiftKey) {
          if (sm.hasSelection()) {
            sm.clear();
            dirty = true;
          }
        }
        if (evt.originalEvent?.shiftKey && this.previousEvt) {
          sm.addSelection(this.createRangeByEvents(evt, this.previousEvt));
          deletePreviousEvent = true;
          dirty = true;


        } else if (evt.originalEvent?.altKey && (evt.originalEvent?.ctrlKey || evt.originalEvent?.metaKey)) {
          sm.removeSelection(CellRange.singleCell(evt.rowIndex, evt.columnIndex));
          deletePreviousEvent = true;
          dirty = true;

        } else if (evt.originalEvent?.ctrlKey || evt.originalEvent?.metaKey) {
          sm.addSelection(CellRange.singleCell(evt.rowIndex, evt.columnIndex));
          deletePreviousEvent = true;
          dirty = true;

        } else {
          // no special key.
          // for selection type  'row' and 'column' we have to select the current row (or column):
          sm.firstClick(evt.rowIndex, evt.columnIndex);
          dirty = true;
        }
        this.tableScope.onSelectionChanged(sm);
      }
    }
    if (deletePreviousEvent) {
      this.previousEvt = undefined;
    } else {
      this.previousEvt = evt?.clone();
    }
    return dirty;
  }

  onActionTriggered(actionId: ActionId): boolean {
    if (this.getSelectionModel && this.getFocusModel) {
      const sm = this.getSelectionModel();
      const fm = this.getFocusModel();
      if (sm && fm) {
        if (actionId === "SELECT_ALL") {
          sm.selectAll();
          this.tableScope.repaint();
          return true;
        }
        if (actionId === "DESELECT_ALL") {
          sm.clear();
          this.tableScope.repaint();
          return true;
        }
        if (actionId === "TOGGLE_SELECTION") {
          const [row, col] = fm.getFocus();
          sm.togglePoint(row, col);
          this.tableScope.repaint();
          return true;
        }
      }
    }
    return false;
  }


  private createRangeByEvents(evt: GeMouseEvent, previousEvt?: GeMouseEvent) {
    if (!previousEvt) {
      previousEvt = evt;
    }
    const r1 = Math.min(evt.rowIndex, previousEvt?.rowIndex);
    const r2 = Math.max(evt.rowIndex, previousEvt?.rowIndex);
    const c1 = Math.min(evt.columnIndex, previousEvt?.columnIndex);
    const c2 = Math.max(evt.columnIndex, previousEvt?.columnIndex);
    return CellRange.create({
      rowIndex1: r1,
      columnIndex1: c1,
      rowIndex2: r2,
      columnIndex2: c2
    });
  }

}
