
import {
  FocusModelIf,
  GeModelChangeEvent, GeMouseEvent, SelectionModelIf, TableApi, TableModelIf, TableOptions
} from '@guiexpert/table';

export type GeMouseEventFn = (evt: GeMouseEvent) => {};
export type GeCheckboxEventFn = (evt: any[]) => {};
export type GeTableReadyEventFn = (evt: TableApi) => {};
export type GeModelChangeEventFn = (evt: GeModelChangeEvent) => {};
export type GeSelectionChangeEventFn = (evt: SelectionModelIf) => {};
export type GeFocusChangeEventFn = (evt: FocusModelIf) => {};

export interface GuiexpertTableProps {
  tableModel: TableModelIf,
  tableOptions?: TableOptions,
  mouseMoved?: GeMouseEventFn,
  contextmenu?: GeMouseEventFn,
  mouseClicked?: GeMouseEventFn,
  mouseDragging?: GeMouseEventFn,
  mouseDraggingEnd?: GeMouseEventFn,
  checkboxChanged?: GeCheckboxEventFn,
  modelChanged?: GeModelChangeEventFn,
  selectionChanged?: GeSelectionChangeEventFn;
  focusChanged?: GeFocusChangeEventFn;
  tableReady?: GeTableReadyEventFn,
  licenseKey?: string,
}

