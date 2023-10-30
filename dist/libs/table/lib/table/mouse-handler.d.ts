import { TableScope } from "./table-scope";
import { GeMouseEvent } from "./data/common/event/ge-mouse-event";
export declare class MouseHandler {
    protected tableScope: TableScope;
    mouseEvent?: MouseEvent;
    startMouseEvent?: GeMouseEvent;
    geMouseEvent?: GeMouseEvent;
    geMouseEventOld?: GeMouseEvent;
    private expandedAll;
    private mouseDown;
    private dragging;
    constructor(tableScope: TableScope);
    private onContextmenu;
    private onHostElementClicked;
    private onHostElementDblClicked;
    private publishGeMouseEvent;
    private updateCollapsedExpandedState;
    private getArrowColumnIndex;
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
    private mouseDraggingOnFrame;
    private mouseDraggingEndOnFrame;
    private mouseMoveOnFrame;
}
