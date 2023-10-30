// TODO use it
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

export type ActionId = typeof actionIds[number];

