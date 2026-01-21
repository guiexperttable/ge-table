import { CoverGridBodyModel } from '../data/tablemodel/areamodel/cover-grid-body-model';
import { CoverGridTableModel } from '../data/tablemodel/cover-grid-table-model';
import { CellRendererIf } from '../renderer/cell-render.if';


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


}
