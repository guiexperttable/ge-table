import { TableModelIf } from "./tablemodel/table-model.if";
import { TableOptions } from "./options/table-options";


/**
 * Interface for a container object for one table model and one table options object.
 */
export interface TableModelAndOptionsIf {
  tableModel: TableModelIf;
  tableOptions: TableOptions;
}
