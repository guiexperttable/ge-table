/**
 * Represents a keyboard event.
 *
 * @class GeKeyEvent
 */
export class GeKeyEvent {

  constructor(
    public status: "down" | "up" = "down",
    public originalEvent?: KeyboardEvent
  ) {
  }


}
