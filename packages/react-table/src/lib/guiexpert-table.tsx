import {
  EventListenerIf,
  FocusModelIf,
  GeModelChangeEvent,
  GeMouseEvent, GeScrollEvent, LicenseManager, SelectionModelIf,
  SimpleDomService,
  TableApi,
  TableModelIf,
  TableOptions,
  TableScope
} from '@guiexpert/table';
import { useEffect, useRef } from "react";

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

/**
 * Initialize and render the GuiexpertTable component.
 *
 * @param {Object} props - The properties of the GuiexpertTable component.
 * @param {TableModel} props.tableModel - The model for the table.
 * @param {TableOptions} [props.tableOptions=new TableOptions()] - The options for the table.
 * @param {Function} [props.mouseMoved] - The callback for mouse movement events.
 * @param {Function} [props.checkboxChanged] - The callback for checkbox change events.
 * @param {Function} [props.contextmenu] - The callback for context menu events.
 * @param {Function} [props.modelChanged] - The callback for model change events.
 * @param {Function} [props.mouseClicked] - The callback for mouse click events.
 * @param {Function} [props.mouseDragging] - The callback for mouse dragging events.
 * @param {Function} [props.mouseDraggingEnd] - The callback for mouse dragging end events.
 * @param {Function} [props.tableReady] - The callback for when the table is ready.
 * @param {string} [props.licenseKey] - The license key for the GuiexpertTable component.
 *
 * @returns {JSX.Element} - The rendered GuiexpertTable component.
 */
export function GuiexpertTable(
  {
    tableModel,
    tableOptions = new TableOptions(),
    mouseMoved,
    checkboxChanged,
    contextmenu,
    modelChanged,
    mouseClicked,
    mouseDragging,
    mouseDraggingEnd,
    selectionChanged,
    focusChanged,
    tableReady,
    licenseKey
  }: GuiexpertTableProps) {

  const myContainer = useRef(null);
  let initialized = false;

  useEffect(() => {
    if (myContainer.current && !initialized) {
      initTable(myContainer.current);
      initialized = true;
    }
  });

  let root: HTMLDivElement | null;

  const initTable = (ele: HTMLDivElement) => {
    const listener: EventListenerIf = {

      onSelectionChanged(model: SelectionModelIf): void {
        if (selectionChanged) {
          selectionChanged(model);
        }
      },

      onFocusChanged(model: FocusModelIf): void{
        if (focusChanged) {
          focusChanged(model);
        }
      },

      onCheckboxChanged: (evt: any[]) => {
        if (checkboxChanged) {
          checkboxChanged(evt);
        }
      },

      onContextmenu: (evt: GeMouseEvent) => {
        if (contextmenu) {
          contextmenu(evt);
        }
      },

      onModelChanged: (evt: GeModelChangeEvent) => {
        if (modelChanged) {
          modelChanged(evt);
        }
      },

      onMouseClicked: (evt: GeMouseEvent) => {
        if (mouseClicked) {
          mouseClicked(evt);
        }
      },

      onMouseDragging: (evt: GeMouseEvent) => {
        if (mouseDragging) {
          mouseDragging(evt);
        }
      },

      onMouseDraggingEnd: (evt: GeMouseEvent) => {
        if (mouseDraggingEnd) {
          mouseDraggingEnd(evt);
        }
      },

      onMouseMoved: (evt: GeMouseEvent) => {
        if (mouseMoved) {
          mouseMoved(evt);
        }
      },

      onScroll(evt: GeScrollEvent) {
        // ignored
      }
    };

    const tableScope = new TableScope(
      ele, tableModel, new SimpleDomService(), tableOptions, listener
    );
    tableScope.firstInit();
    if (tableReady) {
      tableReady(tableScope.getApi());
    }
    if (licenseKey) LicenseManager.getInstance().setLicenseKey(licenseKey);
  };

  return (
    <div
      ref={myContainer}
      className="container-div"
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        padding: "0",
        margin: "0"
      }}></div>
  );
}

export default GuiexpertTable;


