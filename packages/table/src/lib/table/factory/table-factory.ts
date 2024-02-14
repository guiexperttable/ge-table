import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { DefaultRowHeightsIf } from "../data/options/default-row-heights.if";
import { ColumnDefIf } from "../data/tablemodel/column/column-def.if";
import { GetT } from "../data/common/get-t";
import { TableOptionsIf } from "../data/options/table-options.if";
import { TableModelIf } from "../data/tablemodel/table-model.if";
import { DefaultRowHeights } from "../data/options/default-row-heights";
import { ColumnDef } from "../data/tablemodel/column/column-def";
import { px200 } from "../data/common/sizes";
import { AreaModelArrayOfArrays } from "../data/tablemodel/areamodel/area-model-array-of-arrays";
import { AreaModelHidden } from "../data/tablemodel/areamodel/area-model-hidden";
import { TreeRow } from "../data/common/tree-row";
import { AreaModelTree } from "../data/tablemodel/areamodel/area-model-tree";
import { TreeCheckboxModel } from "../checkbox/tree-checkbox-model";
import { TableModel } from "../data/tablemodel/table-model";
import { SelectionModelIf } from "../selection/selection-model.if";
import {
  AreaModelObjectArrayWithColumndefs
} from "../data/tablemodel/areamodel/area-model-object-array-with-columndefs";
import { TableOptions } from "../data/options/table-options";
import {isTreeRow} from "../instanceof-workaround";


export class TableFactory {

  public static createTableModel(p: Partial<{
    headerAreaModel: AreaModelIf,
    bodyAreaModel: AreaModelIf,
    footerAreaModel: AreaModelIf,
    fixedLeftColumnCount: number,
    fixedRightColumnCount: number,
    rowCheckboxVisible: boolean,
    defaultRowHeights: DefaultRowHeightsIf,
    columnDefs: ColumnDefIf[],
    columnSizes: number[],
    overridingColumnWidth: number,
    columnCount: number,
    parentSize: number,
    getSelectionModel: GetT<SelectionModelIf>,
    rows: any[],
    properties: string[],
    bodyData: any[][],
    headerData: string[][], // multi-line header
    footerData: string[][], // multi-line footerData
    tableOptions: TableOptionsIf

  }>): TableModelIf {

    if (p.defaultRowHeights === undefined) {
      if (p.tableOptions?.defaultRowHeights) {
        p.defaultRowHeights = p.tableOptions.defaultRowHeights;
      } else {
        p.defaultRowHeights = new DefaultRowHeights();

        if (p.headerAreaModel && "defaultRowHeight" in p.headerAreaModel) {
          const dh = p.headerAreaModel.defaultRowHeight as number;
          if (dh > -1) {
            p.defaultRowHeights.header = dh;
          }
        }

        if (p.bodyAreaModel && "defaultRowHeight" in p.bodyAreaModel) {
          const dh = p.bodyAreaModel.defaultRowHeight as number;
          if (dh > -1) {
            p.defaultRowHeights.body = dh;
          }
        }

        if (p.footerAreaModel && "defaultRowHeight" in p.footerAreaModel) {
          const dh = p.footerAreaModel.defaultRowHeight as number;
          if (dh > -1) {
            p.defaultRowHeights.footer = dh;
          }
        }
      }
    }

    if (p.columnDefs === undefined) {
      if (p.properties?.length) {
        p.columnDefs = p.properties.map(p => new ColumnDef(p, p.toUpperCase(), px200));
      } else if (p.rows?.length) {
        p.columnDefs = Object.keys(p.rows[0]).map(p => new ColumnDef(p, p.toUpperCase(), px200));
      } else {
        p.columnDefs = [];
      }
    }

    if (p.columnCount === undefined) {
      if (p.columnDefs?.length) {
        p.columnCount = p.columnDefs.length;
      } else if (p.headerData?.length) {
        p.columnCount = p.headerData[0].length;
      } else if (p.columnSizes?.length) {
        p.columnCount = p.columnSizes?.length;
      } else {
        console.warn("Property \"columnCount\" is missing and cannot be derived from other properties.");
      }
    }


    if (!p.headerAreaModel) {
      if (p.headerData?.length) {
        p.headerAreaModel = new AreaModelArrayOfArrays<string>(
          "header",
          p.headerData,
          p.defaultRowHeights.header,
          p.columnDefs
        );
      } else if (p.columnDefs?.length) {
        p.headerAreaModel = new AreaModelArrayOfArrays<string>(
          "header",
          [p.columnDefs.map(def => def.headerLabel)],
          p.defaultRowHeights.header,
          p.columnDefs
        );
      } else {
        p.headerAreaModel = new AreaModelHidden("header");
      }
    }
    if (!p.footerAreaModel) {
      if (p.footerData?.length) {
        p.footerAreaModel = new AreaModelArrayOfArrays<string>(
          "footer",
          p.footerData,
          p.defaultRowHeights.footer,
          p.columnDefs
        );
      } else {
        p.footerAreaModel = new AreaModelHidden("footer");
      }
    }
    if (!p.bodyAreaModel) {
      if (p.rows) {

        if (p.rows?.length && isTreeRow(p.rows[0])) {
          // Tree:
          const treeRows = p.rows as TreeRow<any>[];
          p.bodyAreaModel = new AreaModelTree(
            "body",
            treeRows,
            p.defaultRowHeights.body,
            p.columnDefs
          );
          const checkboxExtraColumnVisible = p.columnDefs[0].property === "CheckboxColumn";
          if (checkboxExtraColumnVisible || p.tableOptions?.showCheckboxWihoutExtraColumn) {
            p.bodyAreaModel.rowSelectionModel = new TreeCheckboxModel(treeRows);
          }
        } else {
          p.bodyAreaModel = new AreaModelObjectArrayWithColumndefs<any>(
            "body", p.rows, p.columnDefs, p.defaultRowHeights.body
          );
        }

      } else if (p.bodyData) {
        p.bodyAreaModel = new AreaModelArrayOfArrays<any>(
          "body", p.bodyData, p.defaultRowHeights.body
        );
      } else {
        p.bodyAreaModel = new AreaModelHidden("body");
      }
    }

    if (p.fixedLeftColumnCount === undefined) {
      p.fixedLeftColumnCount = 0;
    }
    if (p.fixedRightColumnCount === undefined) {
      p.fixedRightColumnCount = 0;
    }
    if (p.rowCheckboxVisible === undefined) {
      p.rowCheckboxVisible = false;
    }
    if (p.overridingColumnWidth === undefined) {
      p.overridingColumnWidth = -1;
    }

    if (!p.getSelectionModel && p.tableOptions?.getSelectionModel) {
      p.getSelectionModel = p.tableOptions?.getSelectionModel;
    }

    // Flat table:
    return new TableModel(
      p.headerAreaModel,
      p.bodyAreaModel,
      p.footerAreaModel,
      p.fixedLeftColumnCount,
      p.fixedRightColumnCount,
      p.rowCheckboxVisible,
      p.defaultRowHeights,
      p.columnDefs,
      p.columnSizes,
      p.overridingColumnWidth,
      p.columnCount,
      p.parentSize,
      p.getSelectionModel
    );
  }

  static buildByTypedRowsParam<T>(param: {
    rows: T[],
    columnDefs: ColumnDefIf[],
    tableOptions?: TableOptionsIf,
    fixedLeftColumnCount?: number,
    fixedRightColumnCount?: number
  }): TableModelIf {

    return TableFactory.buildByTypedRows<T>(
      param.rows ?? [],
      param.columnDefs,
      param.tableOptions ?? new TableOptions(),
      param.fixedLeftColumnCount ?? 0,
      param.fixedRightColumnCount ?? 0
    );
  }

  static buildByTypedRows<T>(
    rows: T[],
    columnDefs: ColumnDefIf[],
    tableOptions: TableOptionsIf = new TableOptions(),
    fixedLeftColumnCount: number = 0,
    fixedRightColumnCount: number = 0
  ): TableModelIf {

    const defaultRowHeights = tableOptions.defaultRowHeights;
    const checkboxExtraColumnVisible = columnDefs[0].property === "CheckboxColumn";

    if (rows?.length && isTreeRow(rows[0])) {
      // Tree:
      const treeRows = rows as TreeRow<T>[];
      const bodyareaModel = new AreaModelTree(
        "body",
        treeRows,
        defaultRowHeights.body,
        columnDefs
      );
      if (checkboxExtraColumnVisible || tableOptions.showCheckboxWihoutExtraColumn) {
        bodyareaModel.rowSelectionModel = new TreeCheckboxModel(treeRows);
      }
      return TableFactory.createByAreaModelsParam({
        headerAreaModel: new AreaModelArrayOfArrays<string>("header", [columnDefs.map(def => def.headerLabel)], defaultRowHeights.header),
        bodyAreaModel: bodyareaModel,
        footerAreaModel: new AreaModelArrayOfArrays<string>("footer", [], defaultRowHeights.footer),
        columnDefs,
        fixedLeftColumnCount,
        fixedRightColumnCount,
        defaultRowHeights: tableOptions.defaultRowHeights,
        rowCheckboxVisible: false,
        columnSizes: [],
        columnCount: columnDefs.length,
        overridingColumnWidth: -1
      });
    }

    // Flat table:
    return TableFactory.createByObjectArrayParam({
      rows,
      columnDefs,
      fixedLeftColumnCount,
      fixedRightColumnCount,
      defaultRowHeights: tableOptions.defaultRowHeights
    });

  }

  public static createByObjectArrayParam<T>(param: {
    rows: T[],
    header?: string[][],
    footer?: string[][],
    fixedLeftColumnCount?: number,
    fixedRightColumnCount?: number,
    rowCheckboxVisible?: boolean,
    defaultRowHeights?: DefaultRowHeightsIf,
    columnDefs?: ColumnDefIf[],
    columnSizes?: number[]
  }) {
    const rowCheckboxVisible = param.rowCheckboxVisible !== undefined ? param.rowCheckboxVisible : false;
    return TableFactory.createByObjectArray<T>(
      param.rows,
      param.header ?? [],
      param.footer ?? [],
      param.fixedLeftColumnCount ?? 0,
      param.fixedRightColumnCount ?? 0,
      rowCheckboxVisible,
      param.defaultRowHeights ?? new DefaultRowHeights(),
      param.columnDefs ?? [],
      param.columnSizes ?? []
    );
  }

  public static createByAreaModels(
    headerAreaModel: AreaModelIf = new AreaModelHidden(),
    bodyAreaModel: AreaModelIf,
    footerAreaModel: AreaModelIf = new AreaModelHidden(),
    fixedLeftColumnCount: number = 0,
    fixedRightColumnCount: number = 0,
    rowCheckboxVisible: boolean = false,
    defaultRowHeights: DefaultRowHeightsIf = new DefaultRowHeights(),
    columnDefs: ColumnDefIf[],
    columnSizes: number[] = [],
    overridingColumnWidth: number = -1,
    columnCount: number
  ) {
    return new TableModel(
      headerAreaModel,
      bodyAreaModel,
      footerAreaModel,
      fixedLeftColumnCount,
      fixedRightColumnCount,
      rowCheckboxVisible,
      defaultRowHeights,
      columnDefs,
      columnSizes,
      overridingColumnWidth,
      columnCount
    );
  }

  public static createByAreaModelsParam(param: {
    headerAreaModel?: AreaModelIf,
    bodyAreaModel: AreaModelIf,
    footerAreaModel?: AreaModelIf,
    fixedLeftColumnCount?: number,
    fixedRightColumnCount?: number,
    rowCheckboxVisible?: boolean,
    defaultRowHeights?: DefaultRowHeightsIf,
    columnDefs?: ColumnDefIf[],
    columnSizes?: number[],
    overridingColumnWidth?: number,
    columnCount?: number
  }) {
    return TableFactory.createByAreaModels(
      param.headerAreaModel ?? new AreaModelHidden(),
      param.bodyAreaModel,
      param.footerAreaModel ?? new AreaModelHidden(),
      param.fixedLeftColumnCount ?? 0,
      param.fixedRightColumnCount ?? 0,
      param.rowCheckboxVisible === undefined ? false : param.rowCheckboxVisible,
      param.defaultRowHeights,
      param.columnDefs ?? [],
      param.columnSizes ?? [],
      param.overridingColumnWidth ?? -1,
      param.columnCount ?? 0
    );
  }

  public static createByObjectArray<T>(
    rows: T[],
    header: string[][] = [],
    footer: string[][] = [],
    fixedLeftColumnCount: number = 0,
    fixedRightColumnCount: number = 0,
    rowCheckboxVisible: boolean = false,
    defaultRowHeights: DefaultRowHeightsIf = new DefaultRowHeights(),
    columnDefs: ColumnDefIf[],
    columnSizes: number[] = []
  ) {
    let headerAreaModel: AreaModelIf;
    if (header?.length) {
      headerAreaModel = new AreaModelArrayOfArrays<string>("header", header, defaultRowHeights.header, columnDefs);
    } else if (columnDefs?.length) {
      headerAreaModel = new AreaModelArrayOfArrays<string>("header", [columnDefs.map(def => def.headerLabel)], defaultRowHeights.header, columnDefs);
    } else {
      headerAreaModel = new AreaModelHidden();
    }
    const footerAreaModel = footer ? new AreaModelArrayOfArrays<string>("footer", footer, defaultRowHeights.footer, columnDefs) : new AreaModelHidden();
    const bodyAreaModel = new AreaModelObjectArrayWithColumndefs<T>("body", rows, columnDefs, defaultRowHeights.body);

    return new TableModel(
      headerAreaModel,
      bodyAreaModel,
      footerAreaModel,
      fixedLeftColumnCount,
      fixedRightColumnCount,
      rowCheckboxVisible,
      defaultRowHeights,
      columnDefs,
      columnSizes
    );
  }
}
