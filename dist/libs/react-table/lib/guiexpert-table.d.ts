import { GeModelChangeEvent, GeMouseEvent, TableApi, TableModelIf, TableOptions } from "@guiexpert/table";
export type GeMouseEventFn = (evt: GeMouseEvent) => {};
export type GeCheckboxEventFn = (evt: any[]) => {};
export type GeTableReadyEventFn = (evt: TableApi) => {};
export type GeModelChangeEventFn = (evt: GeModelChangeEvent) => {};
export interface GuiexpertTableProps {
    tableModel: TableModelIf;
    tableOptions?: TableOptions;
    mouseMoved?: GeMouseEventFn;
    contextmenu?: GeMouseEventFn;
    mouseClicked?: GeMouseEventFn;
    mouseDragging?: GeMouseEventFn;
    mouseDraggingEnd?: GeMouseEventFn;
    checkboxChanged?: GeCheckboxEventFn;
    modelChanged?: GeModelChangeEventFn;
    tableReady?: GeTableReadyEventFn;
}
export declare function GuiexpertTable({ tableModel, tableOptions, mouseMoved, checkboxChanged, contextmenu, modelChanged, mouseClicked, mouseDragging, mouseDraggingEnd, tableReady }: GuiexpertTableProps): import("react/jsx-runtime").JSX.Element;
export default GuiexpertTable;
