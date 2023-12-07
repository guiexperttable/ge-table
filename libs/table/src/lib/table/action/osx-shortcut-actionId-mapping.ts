import { ActionId } from "./action-id.type";

/**
 * Class representing the mapping of OS X shortcut actions to action IDs.
 *
 * @class OsxShortcutActionIdMapping
 */
export class OsxShortcutActionIdMapping {

  get(): { [key: string]: ActionId } {
    return {
      "f2": "START_EDITING",

      "space": "TOGGLE_SELECTION",

      "ctrl+num_add": "SELECT_ALL",
      "cmd+a": "SELECT_ALL",
      "ctrl+a": "SELECT_ALL",

      "cmd+x": "DESELECT_ALL",
      "cmd+shift+a": "DESELECT_ALL",
      "ctrl+shift+a": "DESELECT_ALL",
      "ctrl+num_subtract": "DESELECT_ALL",
      "ctrl -": "DESELECT_ALL",

      "arrowup": "NAVIGATE_UP",
      "arrowdown": "NAVIGATE_DOWN",
      "arrowleft": "NAVIGATE_LEFT",
      "arrowright": "NAVIGATE_RIGHT"
    };
  }


}
