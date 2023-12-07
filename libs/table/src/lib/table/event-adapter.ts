import { GeModelChangeEvent } from "./data/common/event/ge-model-change-event";
import { GeMouseEvent } from "./data/common/event/ge-mouse-event";
import { EventListenerIf } from "./event-listener.if";

/**
 * EventAdapter class implements the EventListenerIf interface.
 * It provides empty implementations for all the event listener methods.
 *
 * @class
 * @implements {EventListenerIf}
 */
export class EventAdapter implements EventListenerIf {

  onCheckboxChanged(_evt: any[]): void {
  }

  onContextmenu(_evt: GeMouseEvent): void {
  }

  onModelChanged(_evt: GeModelChangeEvent): void {
  }

  onMouseClicked(_evt: GeMouseEvent): void {
  }

  onMouseDragging(_evt: GeMouseEvent): void {
  }

  onMouseDraggingEnd(_evt: GeMouseEvent): void {
  }

  onMouseMoved(_evt: GeMouseEvent): void {
  }

}
