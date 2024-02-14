/**
 * An array of action identifiers.
 *
 * @type {ReadonlyArray<string>}
 */
export declare const actionIds: readonly ["COPY_2_CLIPBOARD", "START_EDITING", "TOGGLE_SELECTION", "SELECT_ALL", "DESELECT_ALL", "NAVIGATE_LEFT", "NAVIGATE_RIGHT", "NAVIGATE_UP", "NAVIGATE_DOWN"];
/**
 * Represents an action ID.
 *
 * @typedef {string} ActionId
 * @memberof module:myModule
 * @see module:myModule.actionIds
 */
export type ActionId = typeof actionIds[number];
