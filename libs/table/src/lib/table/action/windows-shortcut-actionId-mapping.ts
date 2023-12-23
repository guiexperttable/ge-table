import { ActionId } from "./action-id.type";

/**
 * Class representing a mapping of Windows shortcut keys to action IDs.
 *
 * Use 'meta' for the MacOS 'cmd' key.
 */
export class WindowsShortcutActionIdMapping {

  get(): { [key: string]: ActionId } {
    return {
      "f2": "START_EDITING",

      "space": "TOGGLE_SELECTION",

      "ctrl+num_add": "SELECT_ALL",
      "ctrl+a": "SELECT_ALL",

      "ctrl+shift+a": "DESELECT_ALL",
      "ctrl+x": "DESELECT_ALL",
      "ctrl+num_subtract": "DESELECT_ALL",

      "meta -": "DESELECT_ALL",

      "arrowup": "NAVIGATE_UP",
      "arrowdown": "NAVIGATE_DOWN",
      "arrowleft": "NAVIGATE_LEFT",
      "arrowright": "NAVIGATE_RIGHT",

      "meta+c": "COPY_2_CLIPBOARD",
      "ctrl+c": "COPY_2_CLIPBOARD",
    };
  }

}
