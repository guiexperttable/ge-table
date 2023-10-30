
import { TableModelAndOptionsIf } from "./table-model-and-options.if";
import { TableModelIf } from "./tablemodel/table-model.if";
import { TableOptions } from "./options/table-options";


export class TableModelAndOptions implements TableModelAndOptionsIf {
  constructor(
    public tableModel: TableModelIf,
    public tableOptions: TableOptions
  ) {
  }
}
