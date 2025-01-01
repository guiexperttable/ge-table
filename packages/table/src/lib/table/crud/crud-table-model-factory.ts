import { CrudOptions } from './crud-options';
import { CreateTableModelPara, TableFactory } from '../factory/table-factory';
import { SelectionModel } from '../selection/selection-model';
import { TableModelAndOptionsIf } from '../data/table-model-and-options.if';
import { TableModelAndOptions } from '../data/table-model-and-options';
import { TableOptions } from '../data/options/table-options';
import { ColumnDefIf } from '../data/tablemodel/column/column-def.if';
import { ColumnDef } from '../data/tablemodel/column/column-def';
import { px200, px400 } from '../data/common/sizes';
import { CellRendererIf } from '../renderer/cell-render.if';
import { AreaObjectMap } from '../data/common/area-map';
import { ActionEventListenerIf } from '../renderer/action/action-event-listener.if';
import { ActionEventIf } from '../renderer/action/action-event.if';
import { ActionsCellRenderer } from '../renderer/action/actions-cell-renderer';
import { TableModelIf } from '../data/tablemodel/table-model.if';
import { TableOptionsIf } from '../data/options/table-options.if';
import {
  AreaModelObjectArrayWithColumndefs
} from '../data/tablemodel/areamodel/area-model-object-array-with-columndefs';


export class CrudTableModelFactory implements ActionEventListenerIf {

  public tableModel: TableModelIf | undefined;
  public bodyModel: AreaModelObjectArrayWithColumndefs<any> | undefined;
  public tableOptions: TableOptionsIf | undefined;
  public crudOptions: CrudOptions | undefined;

  createTableModel<T>(
    crudOptions: CrudOptions,
    p: Partial<CreateTableModelPara>,
    callback: (tableModelAndOptions: TableModelAndOptionsIf) => void = (_: TableModelAndOptionsIf) => {
    }): void {

    this.crudOptions = crudOptions;

    crudOptions.fetchList<T>(crudOptions).then(rows => {
      p.rows = rows;
      const selectionModel = new SelectionModel('row', 'multi');
      const getSelectionModel = () => selectionModel;

      this.tableOptions = {
        ...new TableOptions(),
        ...p.tableOptions,
        hoverColumnVisible: false,
        getSelectionModel
      };

      const columnDefs: ColumnDefIf[] = p.columnDefs?.length ? p.columnDefs : Object.keys(p.rows[0]).map(p => new ColumnDef(p, p.toUpperCase(), px200));
      if (crudOptions.autoAddActionColumn) {
        let columnDef = new ColumnDef(
          'id',
          'Actions',
          px400,
          new AreaObjectMap(['ge-table-text-align-left'], ['ge-table-text-align-left ge-table-actions-cell'], undefined)
        );
        columnDef.rendererMap = new AreaObjectMap<CellRendererIf>(
          undefined,
          new ActionsCellRenderer(this, crudOptions.singleRowActions),
          undefined
        );
        columnDefs.push(columnDef);
      }

      const fixedLeftColumnCount: number = 0;
      const fixedRightColumnCount: number = 0;
      this.tableModel = TableFactory.buildByTypedRowsParam<T>({
        rows,
        columnDefs,
        tableOptions: this.tableOptions,
        fixedLeftColumnCount,
        fixedRightColumnCount
      });
      this.tableModel.getSelectionModel = getSelectionModel;
      this.bodyModel = this.tableModel?.getBodyModel() as AreaModelObjectArrayWithColumndefs<T>;
      const mo = new TableModelAndOptions(this.tableModel, this.tableOptions);
      callback(mo);
    });
  }

  onActionEvent(actionEvent: ActionEventIf): void {
    console.info('TODO Action event', actionEvent); // TODO

    if (actionEvent.action === 'VIEW') {
      let id = actionEvent.id;
      this.crudOptions?.fetchItem(this.crudOptions, id)
        .then(json => {
          console.info(json);
          return json;
        });

    } else if (actionEvent.action === 'DELETE') {
      let id = actionEvent.id;

      this.crudOptions?.deleteItem(this.crudOptions, id)
        .then(json => {
          console.info(json);

          console.info('all', this.bodyModel?.getAllRows().length);

          this.bodyModel?.filterRowsByPredict(row => row.id != id);

          console.info('all', this.bodyModel?.getAllRows().length);
          this.tableModel?.getTableScope()?.clearSelection(true);
          this.tableModel?.getTableScope()?.repaintHard();
          return json;
        });
    }
  }


}
