import { TableScope } from "./table-scope";
/**
 * Class representing a ResizeHandler.
 * @class
 * @classdesc Handles resizing of elements and calls a callback function on resize. These calls will be debounced with 500 ms.
 */
export declare class ResizeHandler {
    protected tableScope: TableScope;
    protected debounceDelay: number;
    constructor(tableScope: TableScope, debounceDelay?: number);
    private handleResize;
}
