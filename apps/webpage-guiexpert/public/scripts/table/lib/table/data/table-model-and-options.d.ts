import { TableModelAndOptionsIf } from "./table-model-and-options.if";
import { TableModelIf } from "./tablemodel/table-model.if";
import { TableOptions } from "./options/table-options";
/**
 * Container object for one table model and one table options object.
 */
export declare class TableModelAndOptions implements TableModelAndOptionsIf {
    tableModel: TableModelIf;
    tableOptions: TableOptions;
    constructor(tableModel: TableModelIf, tableOptions: TableOptions);
}
