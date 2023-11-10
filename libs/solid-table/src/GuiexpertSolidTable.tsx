import { mergeProps, onMount, Component } from "solid-js";
import {SimpleDomService, TableModelIf, TableOptions, TableScope} from "../../table/src";
import {GeCheckboxEventFn, GeModelChangeEventFn, GeMouseEventFn, GeTableReadyEventFn} from "@guiexpert/react-table";

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
  tableReady?: GeTableReadyEventFn
}

const GuiexpertSolidTable: Component<GuiexpertTableProps> =  (props:any) => {

  let ref:any;

  const merged = mergeProps({
    tableModel: null,
    tableOptions: new TableOptions()
  }, props);


  // Man verwende onMount oder createEffect, um die ref nach dem Einhängen ins DOM zu verwenden
  onMount(() => {
    const listener = {
      onCheckboxChanged: (evt: any) => {
        const e = new CustomEvent("checkboxChanged", { detail: evt, bubbles: true });
        ref.dispatchEvent(e);
      },

      onContextmenu: (evt: any) => {
        const e = new CustomEvent("contextmenu", { detail: evt, bubbles: true });
        ref.dispatchEvent(e);
      },

      onModelChanged: (evt: any) => {
        const e = new CustomEvent("modelChanged", { detail: evt, bubbles: true });
        ref.dispatchEvent(e);
      },

      onMouseClicked: (evt: any) => {
        const e = new CustomEvent("mouseClicked", { detail: evt, bubbles: true });
        ref.dispatchEvent(e);
      },

      onMouseDragging: (evt: any) => {
        const e = new CustomEvent("mouseDragging", { detail: evt, bubbles: true });
        ref.dispatchEvent(e);
      },

      onMouseDraggingEnd: (evt: any) => {
        const e = new CustomEvent("mouseDraggingEnd", { detail: evt, bubbles: true });
        ref.dispatchEvent(e);
      },

      onMouseMoved: (evt: any) => {
        const e = new CustomEvent("mouseMoved", { detail: evt, bubbles: true });
        ref.dispatchEvent(e);
      }
    };

    const tableScope = new TableScope(
      ref, merged.tableModel, new SimpleDomService(), merged.tableOptions, listener
    );
    tableScope.firstInit();
    const e = new CustomEvent("tableReady", { detail: tableScope.getApi(), bubbles: true });
    ref.dispatchEvent(e);
  });

  return (<div ref={ref} />);
};

export default GuiexpertSolidTable;