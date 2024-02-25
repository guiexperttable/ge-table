import { TableScope } from "./table-scope";
import { debounce } from '../common/debounce';

/**
 * Class representing a ResizeHandler.
 * @class
 * @classdesc Handles resizing of elements and calls a callback function on resize. These calls will be debounced with 500 ms.
 */
export class ResizeHandler {


  constructor(
    protected tableScope: TableScope,
    protected debounceDelay: number = 500
  ) {
    const resizeObserver = new ResizeObserver(debounce(this.handleResize.bind(this), debounceDelay));
    resizeObserver.observe(this.tableScope.hostElement);
  }

  private handleResize(entries: ResizeObserverEntry[]){
    const entry = entries[0];
    const { width } = entry.contentRect;
    this.tableScope.recalcColumnWidths(width);
  }



}
