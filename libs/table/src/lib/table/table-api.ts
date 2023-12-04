import { TableScope } from "./table-scope";
import { ColumnDefIf } from "./data/tablemodel/column/column-def.if";
import { TableCellUpdateEventIf } from "./data/common/event/input/table-cell-update-event.if";


export class TableApi {

  constructor(
    private readonly tableScope: TableScope
  ) {
  }


  updateCells(
    events: TableCellUpdateEventIf[],
    repaintAll: boolean = false): void {
    this.tableScope.updateCells(events, repaintAll);
  }


  externalFilterChanged(): void {
    this.tableScope.externalFilterChanged();
  };

  scrollToPixel(_px: number = 0, _py: number = 0) {
    // TODO scrollToPixel
  }


  scrollToIndex(_indexX: number = 0, _indexY: number = 0) {
    // TODO scrollToIndex
  }

  setHeaderVisible(_visible: boolean = true) {
    // TODO setHeaderVisible
  }

  setColumnVisible(_column: number | ColumnDefIf, _visible: boolean = true) {
    // TODO setColumnVisible
  }

  isColumnVisible(_column: number | ColumnDefIf): boolean {
    // TODO isColumnVisible
    return true;
  }

  isHeaderVisible(): boolean {
    return true; // TODO isHeaderVisible
  }

  setFooterVisible(_visible: boolean = true) {
    // TODO setFooterVisible
  }

  isFooterVisible(): boolean {
    return true; // TODO isFooterVisible
  }

  repaint() {
    this.tableScope.repaint();
  }

}
