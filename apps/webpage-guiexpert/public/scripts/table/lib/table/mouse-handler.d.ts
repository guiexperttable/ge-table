import { TableScope } from "./table-scope";
import { GeMouseEvent } from "./data/common/event/ge-mouse-event";
/**
 * Class representing a MouseHandler.
 * @class
 */
export declare class MouseHandler {
    protected tableScope: TableScope;
    /**
     * Represents the delay in milliseconds between two consecutive double clicks.
     *
     * @type {number}
     */
    doubleClickDelay: number;
    mouseEvent?: MouseEvent;
    startMouseEvent?: GeMouseEvent;
    geMouseEvent?: GeMouseEvent;
    geMouseEventOld?: GeMouseEvent;
    private expandedAll;
    private mouseDown;
    private dragging;
    constructor(tableScope: TableScope);
    /**
     * Handles the "contextmenu" event.
     *
     * @private
     * @param {MouseEvent} evt - The mouse event object.
     * @return {void}
     */
    private onContextmenu;
    private lastClicked;
    /**
     * Handles the click event on the host element.
     *
     * @param {MouseEvent} event - The click event.
     *
     * @return {void}
     */
    private onHostElementClicked;
    /**
     * Handles the double click event on the host element.
     * This method is private.
     *
     * @param {MouseEvent} event - The double click event.
     */
    private onHostElementDblClicked;
    /**
     * Publishes a GeMouseEvent.
     *
     * @param {MouseEvent} event - The MouseEvent to publish.
     * @param {number} clickCount - The number of clicks for the GeMouseEvent.
     *
     * @return {void}
     */
    private publishGeMouseEvent;
    /**
     * Update the collapsed/expanded state of a tree row.
     *
     * @param {TreeRowIf<any>} tr - The tree row object.
     * @returns {void}
     */
    private updateCollapsedExpandedState;
    private getArrowColumnIndex;
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
    private mouseDraggingOnFrame;
    private mouseDraggingEndOnFrame;
    private mouseMoveOnFrame;
}
