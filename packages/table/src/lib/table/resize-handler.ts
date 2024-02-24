import { TableScope } from "./table-scope";
import { debounce } from '../common/debounce';

export class ResizeHandler {


  constructor(
    protected tableScope: TableScope
  ) {
    const resizeObserver = new ResizeObserver(debounce(this.handleResize.bind(this), 500));
    resizeObserver.observe(this.tableScope.hostElement);
  }

  private handleResize(entries: ResizeObserverEntry[]){
    const entry = entries[0];
    const { width } = entry.contentRect;
    this.tableScope.recalcColumnWidths(width);
  }



}
