import { CrudOptions } from './crud-options';
import { CreateTableModelPara, TableFactory } from '../factory/table-factory';
import { SelectionModel } from '../selection/selection-model';
import { TableModelAndOptionsIf } from '../data/table-model-and-options.if';
import { TableModelAndOptions } from '../data/table-model-and-options';
import { TableOptions } from '../data/options/table-options';
import { ColumnDefIf } from '../data/tablemodel/column/column-def.if';
import { ColumnDef } from '../data/tablemodel/column/column-def';
import { px300 } from '../data/common/sizes';
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
import { Size } from '../data/common/size';


export class CrudTableModelFactory implements ActionEventListenerIf {

  public tableModel: TableModelIf | undefined;
  public bodyModel: AreaModelObjectArrayWithColumndefs<any> | undefined;
  public tableOptions: TableOptionsIf | undefined;
  public crudOptions: CrudOptions = new CrudOptions();

  public listenActionEvent: (actionEvent: ActionEventIf) => void = (_: ActionEventIf) => {
  };


  createTableModel<T>(
    crudOptions: CrudOptions,
    p: Partial<CreateTableModelPara>,
    callback: (tableModelAndOptions: TableModelAndOptionsIf) => void = (_: TableModelAndOptionsIf) => {
    },
    listenActionEvent: (actionEvent: ActionEventIf) => void = (_: ActionEventIf) => {
    }
  ): void {

    this.crudOptions = crudOptions;
    this.listenActionEvent = listenActionEvent;

    crudOptions.fetchList<T>(crudOptions).then(rows => {
      p.rows = rows;

      if (rows?.length) {
        const props: string[] = this.extractProperties(rows[0]);
        const selectionModel = new SelectionModel('row', 'multi');
        const getSelectionModel = () => selectionModel;

        this.tableOptions = {
          ...new TableOptions(),
          ...p.tableOptions,
          hoverColumnVisible: false,
          getSelectionModel
        };

        const widths: number[] = this.calcAutoColumnWidths<T>(rows, props);
        const columnDefs: ColumnDefIf[] = p.columnDefs?.length
          ? p.columnDefs
          : props.map(((p, i) => new ColumnDef(p, p.toUpperCase(), new Size(widths[i], 'px'))));
        if (crudOptions.autoAddActionColumn) {
          let columnDef = new ColumnDef(
            'id',
            'Actions',
            px300,
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
        const fixedRightColumnCount: number = crudOptions.calcFixedRightColumnCount(columnDefs.length);

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
      }
    });
  }

  onActionEvent(actionEvent: ActionEventIf): void {
    if (this.listenActionEvent) {
      this.listenActionEvent(actionEvent);
    }
    //console.info('TODO Action event', actionEvent); // TODO

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
          this.bodyModel?.filterRowsByPredict(row => row.id != id);
          this.tableModel?.getTableScope()?.clearSelection(true);
          this.tableModel?.getTableScope()?.repaintHard();
          return json;
        });
    }
  }

  private calcAutoColumnWidths<T>(
    rows: T[],
    props: string[],
    labels: string[] = props
  ): number[] {
    const columnCount = props.length;

    if (!this.crudOptions.columnWidths?.autoCalc) {
      return new Array(columnCount).fill(200);
    }
    const rowCount = rows.length ?? 0;
    const characterLengthArr = new Array(columnCount).fill(0);
    for (let r = 0; r < rowCount; r++) {
      for (let c = 0; c < columnCount; c++) {
        const property = props[c];
        const value = this.getValueByT<T>(rows[r], property);
        const length = value?.toString().length || 0;
        if (length > characterLengthArr[c]) {
          characterLengthArr[c] = length;
        }
      }
    }
    if (this.crudOptions.columnWidths.takeHeaderLabelsIntoAccount) {
      for (let c = 0; c < columnCount; c++) {
        const length = labels[c].length || 0;
        if (length > characterLengthArr[c]) {
          characterLengthArr[c] = length;
        }
      }
    }
    const min = this.crudOptions.columnWidths.minWidth;
    const max = this.crudOptions.columnWidths.maxWidth;
    return characterLengthArr
      .map((charLen, _idx) =>
        Math.min(
          max,
          Math.max(
            this.crudOptions.columnWidths.charCountToWidth(charLen, _idx),
            min
          )));
  }

  private getValueByT<T>(t: T, property: string) {
    if (property.includes('.')) {
      return this.getPropertyValue(t, property.split('.'));
    }
    return t[property  as keyof typeof t];
  }

  private getPropertyValue(o: any, props: string[]): any {
    const prop = props.shift();
    const o2 = o[prop as keyof typeof o];
    if (o2 && props.length) {
      return this.getPropertyValue(o2, props);
    }
    return o2;
  }

  private extractProperties(obj: any, parentKey: string = '', result: string[] = []): string[] {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          this.extractProperties(obj[key], newKey, result);
        } else {
          result.push(newKey);
        }
      }
    }
    return result;
  }


}
