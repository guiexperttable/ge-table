// TODO use it
/**
 * An array of action identifiers.
 *
 * @type {ReadonlyArray<string>}
 */
export const actionIds = [
  //"COPY_2_CLIPBOARD",

  "START_EDITING",
  "TOGGLE_SELECTION",
  "SELECT_ALL",
  "DESELECT_ALL",

  "NAVIGATE_LEFT",
  "NAVIGATE_RIGHT",
  "NAVIGATE_UP",
  "NAVIGATE_DOWN",
  //
  // "ENTER_PRESSED",
  // "HOME_PRESSED",
  // "SPACE_PRESSED",
  // "END_PRESSED",
  // "PAGEUP_PRESSED",
  // "PAGEDOWN_PRESSED"
] as const;

/**
 * Represents an action ID.
 *
 * @typedef {string} ActionId
 * @memberof module:myModule
 * @see module:myModule.actionIds
 */
export type ActionId = typeof actionIds[number];

