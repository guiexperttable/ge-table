import { Component } from "preact";
import { TableModelIf, TableOptions } from "@guiexpert/table";
import { GeCheckboxEventFn, GeModelChangeEventFn, GeMouseEventFn, GeTableReadyEventFn } from "@guiexpert/react-table";
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
export declare class GuiexpertTable extends Component {
    ref: import("preact").RefObject<any>;
    constructor(props: GuiexpertTableProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    initTable(ele: HTMLDivElement, props: GuiexpertTableProps): void;
    render(): import("preact").JSX.Element;
}
export default GuiexpertTable;
