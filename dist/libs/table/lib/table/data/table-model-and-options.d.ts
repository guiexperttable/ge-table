import { TableModelAndOptionsIf } from "./table-model-and-options.if";
import { TableModelIf } from "./tablemodel/table-model.if";
import { TableOptions } from "./options/table-options";
export declare class TableModelAndOptions implements TableModelAndOptionsIf {
    tableModel: TableModelIf;
    tableOptions: TableOptions;
    constructor(tableModel: TableModelIf, tableOptions: TableOptions);
}
