import { SizeIf } from "../../common/size.if";
import { CellRendererIf } from "../../../renderer/cell-render.if";
import { AreaObjectMapType } from "../../common/area-map.type";
import { BooleanFunction } from "../../common/boolean-function";
import { SortState } from "../../common/sort-state.type";
import { GetEditRenderer } from "../../../renderer/edit/edit-cell-renderer.type";
import { editInputPipe } from "../../../renderer/edit/edit-input-pipe.if";
/**
 * Represents a column definition of one table column.
 */
export interface ColumnDefIf {
    /**
     * Represents a property name of the table row element.
     * @typedef {String} VariableProperty
     */
    property: string;
    /**
     * Represents the label for a header.
     *
     * @typedef {string} headerLabel
     */
    headerLabel: string;
    /**
     * Represents the size of a column along the width dimension.
     *
     * @typedef {number} Width
     */
    width: SizeIf;
    /**
     * Represents the minimum width of a column.
     *
     * @typedef {SizeIf} minWidth
     * @property {number} width - The minimum width value.
     * @property {string} unit - The unit of measurement for the minimum width value.
     *                           Default value is 'px' if not specified.
     */
    minWidth: SizeIf;
    /**
     * Represents the maximum width of a column.
     *
     * @typedef {number} SizeIf
     */
    maxWidth: SizeIf;
    /**
     * @typedef {Object} AreaObjectMapType
     * @template T
     * @property {Object.<string, T>} map - A mapping of strings to values of type T
     */
    rendererMap: AreaObjectMapType<CellRendererIf>;
    /**
     * Represents an object that maps an area to a collection of objects.
     *
     * @typedef {Object.<string, string[]>} AreaObjectMapType
     */
    classes: AreaObjectMapType<string[]>;
    /**
     * Determines whether or not a column can be sorted.
     *
     * @param {boolean} sortable - Specifies if an item is sortable.
     * @returns {boolean} - Indicating whether the item is sortable or not.
     */
    sortable?: BooleanFunction;
    /**
     * Determines if the sort icon is visible.
     *
     * @typedef {BooleanFunction} sortIconVisible
     * @returns {boolean} Indicates whether the sort icon is visible.
     */
    sortIconVisible?: BooleanFunction;
    /**
     * Represents a function that compares two values for sorting purposes.
     * The function takes two arguments of type T, compares them, and returns a number.
     * If the result is negative, it means 'a' comes before 'b' in the sorted order.
     * If the result is positive, it means 'b' comes before 'a' in the sorted order.
     * If the result is zero, it means the two values are considered equal for sorting purposes.
     *
     * @typeparam T The type of values being compared.
     *
     * @param a The first value to be compared.
     * @param b The second value to be compared.
     *
     * @returns A number indicating the relative order of 'a' and 'b'.
     */
    sortComparator?: <T>(a: T, b: T) => number;
    /**
     * Represents the state of sorting for a list.
     *
     * @typedef {Object} SortState
     *
     * @property {string} [sortKey] - The key to sort the list by. If not provided, no sorting will be applied.
     * @property {boolean} [reverse] - Indicates whether the list should be sorted in reverse order. Defaults to false.
     */
    sortState?: SortState;
    /**
     * Represents the order of multiple sort states.
     *
     * @typedef {SortState[]} SortStatesOrder
     */
    sortStatesOrder?: SortState[];
    /**
     * Determines if a column is editable or not.
     *
     * @param {any} variable - The variable to check.
     * @returns {boolean} - Returns true if the variable is editable, false otherwise.
     */
    editable?: BooleanFunction;
    /**
     * Determines if the column is visible or not.
     *
     * @typedef {Function} isVisible
     * @returns {boolean} - If the element is visible, returns true. Otherwise, returns false.
     */
    isVisible?: BooleanFunction;
    /**
     * Retrieves the edit renderer for the column.
     *
     * @name getEditRenderer
     * @function
     * @param {HTMLElement} element - The element for which to retrieve the edit renderer.
     * @returns {EditRenderer | null} - The edit renderer for the specified element, or null if not found.
     */
    getEditRenderer?: GetEditRenderer;
    /**
     * Represents an edit input pipe.
     *
     * @typedef {object} editInputPipe
     * @property {string} name - The name of the edit input pipe.
     * @property {number} id - The unique identifier of the edit input pipe.
     * @property {boolean} isActive - Indicates whether the edit input pipe is active.
     * @property {function} execute - Executes the edit input pipe operation.
     * @property {function} addFilter - Adds a filter to the edit input pipe.
     * @property {function} removeFilter - Removes a filter from the edit input pipe.
     * @property {function} clearFilters - Clears all filters from the edit input pipe.
     * @property {function} setPriority - Sets the priority of the edit input pipe.
     * @property {function} getStatus - Retrieves the current status of the edit input pipe.
     */
    editInputPipe?: editInputPipe;
}
