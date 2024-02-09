import { FocusType } from "./focus.type";
import { FocusModelIf } from "./focus-model.if";
import { EventFocusChangedListenerIf } from './event-focus-changed-listener.if';

export class FocusModel implements FocusModelIf {

  protected rowIndex: number = -1;
  protected columnIndex: number = -1;
  protected changed = false;

  private listenerArr: EventFocusChangedListenerIf[] = [];

  constructor(
    public selectionType: FocusType = "none"
  ) {
  }

  getEventFocusChangedListeners(): EventFocusChangedListenerIf[]{
    return this.listenerArr;
  }

  addEventFocusChangedListener(listener: EventFocusChangedListenerIf): void {
    if (!this.listenerArr.includes(listener)) {
      this.listenerArr.push(listener);
    }
  }

  removeEventFocusChangedListener(listener: EventFocusChangedListenerIf): void {
    const index = this.listenerArr.indexOf(listener, 0);
    if (index > -1) {
      this.listenerArr.splice(index, 1);
    }
  }

  fireChangeEvent() {
    this.listenerArr.forEach(l => l.onFocusChanged(this));
  }

  clearChanged(): void {
    this.changed = false;
  }

  hasChanged(): boolean {
    return this.changed;
  }

  clear(): void {
    this.rowIndex = -1;
    this.columnIndex = -1;
    this.fireChangeEvent();
  }


  setFocus(
    rowIndex: number,
    columnIndex: number
  ): void {
    if (this.rowIndex !== rowIndex || this.columnIndex !== columnIndex) {
      this.rowIndex = rowIndex;
      this.columnIndex = columnIndex;
      this.changed = true;
      this.fireChangeEvent();
    }
  }

  hasFocus(rowIndex: number, columnIndex: number): boolean {
    return this.rowIndex === rowIndex && this.columnIndex === columnIndex;
  }

  getFocus(): [number, number] {
    return [this.rowIndex, this.columnIndex];
  }

}
