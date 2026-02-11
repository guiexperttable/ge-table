import { CoverGridBodyModel } from '../data/tablemodel/areamodel/cover-grid-body-model';
import { CoverGridTableModel } from '../data/tablemodel/cover-grid-table-model';
import { CellRendererIf } from '../renderer/cell-render.if';
import { TableOptionsIf } from '../data/options/table-options.if';
import { TableOptions } from '../data/options/table-options';
import { AutoRestoreOptions } from '../data/options/auto-restore-options';



export class CoverGridFactory {


  public static createCoverGridModel<T>(
    items: T[],
    cellRenderer: CellRendererIf,
    coverWidth: number = 200,
    coverHeight: number = 300,
    width = 0,
    firstRowPaddingTop: number = 0
  ): CoverGridTableModel<T> {

    const bodyModel: CoverGridBodyModel<T> = new CoverGridBodyModel<T>(items, cellRenderer, coverWidth, coverHeight, width, firstRowPaddingTop);
    const tableModel: CoverGridTableModel<T> = new CoverGridTableModel<T>(bodyModel, firstRowPaddingTop);

    return tableModel;
  }


  public static createCoverGrisDefaultOptions(
    defaultRowHeight: number,
    getStorageKeyFn: () => string = () => 'CoverGrid',

  ):TableOptionsIf {
    const tableOptions: TableOptionsIf = {
      ...new TableOptions(),

      horizontalBorderVisible: false,
      verticalBorderVisible: false,
      footerSeparatorBorderVisible: false,
      headerSeparatorBorderVisible: false,
      fixedEastSeparatorBorderVisible: false,
      fixedWestSeparatorBorderVisible: false,
      tableTopBorderVisible: false,
      tableBottomBorderVisible: false,

      hoverColumnVisible: false,
      hoverRowVisible: false,

      defaultRowHeights: {
        header: 0,
        body: defaultRowHeight,
        footer: 0
      },
      // externalFilterFunction: this.filterFn.bind(this),
      autoRestoreOptions: {
        ...new AutoRestoreOptions<string>(),
        getStorageKeyFn: getStorageKeyFn,
        autoRestoreCollapsedExpandedState: false,
        autoRestoreScrollPosition: true,
        autoRestoreSortingState: false,
        autoRestoreSelectedState: false
      }
    }
    return tableOptions;
  }

}
