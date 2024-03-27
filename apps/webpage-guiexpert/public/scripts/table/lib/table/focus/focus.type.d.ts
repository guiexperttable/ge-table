/**
 * The `FocusType` type alias provides an enumerated set of string literal values
 * which can be used to indicate the type of focus within the grid.
 *
 * The values are:
 * - "none" : Indicating that cells and rows cannot have a focus.
 * - "cell" : Indicating that cells can have a focus.
 * - "row"  : Indicating that entire rows can have a focus.
 *
 * Typically, this type is used within the `FocusModel` class,
 * specifically in the `constructor` and in the `setFocus` method,
 * to set `selectionType` property and determine where the focus is set respectively.
 *
 * Here is a usage example with the `FocusModel` class:
 *
 * ```typescript
 * let focusModel = new FocusModel("cell");
 * focusModel.setFocus(2, 3);
 * ```
 *
 * In the above example, a `FocusModel` instance is created with a `FocusType` of "cell".
 * Then the focus is set to the cell at row index 2 and column index 3.
 *
 * @see FocusModel
 * @see FocusModel#setFocus
 * @see FocusModelIf
 * @type
 */
export type FocusType = "none" | "cell" | "row";
