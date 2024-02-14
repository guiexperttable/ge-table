import { TableScope } from "./table-scope";
/**
 * Class representing an input handler for table input fields (HTMLSelectElement, HTMLTextAreaElement, HTMLInputElement).
 *
 * @class
 * @memberOf module:input
 */
export declare class InputHandler {
    protected tableScope: TableScope;
    constructor(tableScope: TableScope);
    /**
     * Handles the onHostElementChanged event.
     * In case that the element is an input field, the tableScope.updateModelValueAfterEdit() method is triggered.
     *
     * @param {Event} event - The event object.
     *
     * @return {void}
     */
    private onHostElementChanged;
}
