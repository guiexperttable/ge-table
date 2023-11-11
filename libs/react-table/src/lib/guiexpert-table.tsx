import {
  GeModelChangeEvent,
  GeMouseEvent,
  SimpleDomService,
  TableApi,
  TableModelIf,
  TableOptions,
  TableScope
} from "@guiexpert/table";
import React, { useEffect, useRef } from "react";

export type GeMouseEventFn = (evt: GeMouseEvent) => {};
export type GeCheckboxEventFn = (evt: any[]) => {};
export type GeTableReadyEventFn = (evt: TableApi) => {};
export type GeModelChangeEventFn = (evt: GeModelChangeEvent) => {};

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
    tableReady
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
    const listener = {
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
      }
    };

    const tableScope = new TableScope(
      ele, tableModel, new SimpleDomService(), tableOptions, listener
    );
    tableScope.firstInit();
    if (tableReady) {
      tableReady(tableScope.getApi());
    }
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


