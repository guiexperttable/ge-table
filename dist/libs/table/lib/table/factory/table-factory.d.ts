import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { DefaultRowHeightsIf } from "../data/options/default-row-heights.if";
import { ColumnDefIf } from "../data/tablemodel/column/column-def.if";
import { GetT } from "../data/common/get-t";
import { TableOptionsIf } from "../data/options/table-options.if";
import { TableModelIf } from "../data/tablemodel/table-model.if";
import { TableModel } from "../data/tablemodel/table-model";
import { SelectionModelIf } from "../selection/selection-model.if";
export declare class TableFactory {
    static createTableModel(p: Partial<{
        headerAreaModel: AreaModelIf;
        bodyAreaModel: AreaModelIf;
        footerAreaModel: AreaModelIf;
        fixedLeftColumnCount: number;
        fixedRightColumnCount: number;
        rowCheckboxVisible: boolean;
        defaultRowHeights: DefaultRowHeightsIf;
        columnDefs: ColumnDefIf[];
        columnSizes: number[];
        overridingColumnWidth: number;
        columnCount: number;
        parentSize: number;
        getSelectionModel: GetT<SelectionModelIf>;
        rows: any[];
        properties: string[];
        bodyData: any[][];
        headerData: string[][];
        footerData: string[][];
        tableOptions: TableOptionsIf;
    }>): TableModelIf;
    static buildByTypedRowsParam<T>(param: {
        rows: T[];
        columnDefs: ColumnDefIf[];
        tableOptions?: TableOptionsIf;
        fixedLeftColumnCount?: number;
        fixedRightColumnCount?: number;
    }): TableModelIf;
    static buildByTypedRows<T>(rows: T[], columnDefs: ColumnDefIf[], tableOptions?: TableOptionsIf, fixedLeftColumnCount?: number, fixedRightColumnCount?: number): TableModelIf;
    static createByObjectArrayParam<T>(param: {
        rows: T[];
        header?: string[][];
        footer?: string[][];
        fixedLeftColumnCount?: number;
        fixedRightColumnCount?: number;
        rowCheckboxVisible?: boolean;
        defaultRowHeights?: DefaultRowHeightsIf;
        columnDefs?: ColumnDefIf[];
        columnSizes?: number[];
    }): TableModel;
    static createByAreaModels(headerAreaModel: AreaModelIf | undefined, bodyAreaModel: AreaModelIf, footerAreaModel: AreaModelIf | undefined, fixedLeftColumnCount: number | undefined, fixedRightColumnCount: number | undefined, rowCheckboxVisible: boolean | undefined, defaultRowHeights: DefaultRowHeightsIf | undefined, columnDefs: ColumnDefIf[], columnSizes: number[] | undefined, overridingColumnWidth: number | undefined, columnCount: number): TableModel;
    static createByAreaModelsParam(param: {
        headerAreaModel?: AreaModelIf;
        bodyAreaModel: AreaModelIf;
        footerAreaModel?: AreaModelIf;
        fixedLeftColumnCount?: number;
        fixedRightColumnCount?: number;
        rowCheckboxVisible?: boolean;
        defaultRowHeights?: DefaultRowHeightsIf;
        columnDefs?: ColumnDefIf[];
        columnSizes?: number[];
        overridingColumnWidth?: number;
        columnCount?: number;
    }): TableModel;
    static createByObjectArray<T>(rows: T[], header: string[][] | undefined, footer: string[][] | undefined, fixedLeftColumnCount: number | undefined, fixedRightColumnCount: number | undefined, rowCheckboxVisible: boolean | undefined, defaultRowHeights: DefaultRowHeightsIf | undefined, columnDefs: ColumnDefIf[], columnSizes?: number[]): TableModel;
}
