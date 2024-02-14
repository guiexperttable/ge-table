import { AreaIdent } from "../../../tablemodel/area-ident.type";

/**
 * One event defines one table cell update operation.
 * You can send an array of these event via TableApi#updateCells(events: TableCellUpdateEventIf[], repaintAll: boolean = false).
 */
export interface TableCellUpdateEventIf {

  /**
   * Represents an area identifier ("header" | "body" | "footer"), which defines the part of the table.
   *
   * @typedef {number} AreaIdent
   */
  area: AreaIdent;

  /**
   * Represents the index of a row of the table.
   *
   * @typedef {number} rowIndex
   */
  rowIndex: number;

  /**
   * Represents the index of a column in a data table.
   *
   * @typedef {number} columnIndex
   */
  columnIndex: number;


  /**
   * The value can be any data type.
   * It can store a string, number, boolean, object, function, or null.
   * It is a flexible variable that can hold any value.
   *
   * This valie will be set to the area model for the cell (rowIndex, columnIndex).
   *
   * @type {*} - Represents any data type
   */
  value: any;


  /**
   * Represents a collection of CSS classes with their corresponding boolean values.
   * For each key-value pair of the object with a truthy value the corresponding key is used as a class name.
   * For each key-value pair of the object with a falsy value the corresponding key will be removed from the class list of the cell div (dom node).
   * Example:
   *    {
   *       low: val >= 0 && val <=5,
   *       medium: val > 5 && val <= 10,
   *       high: val > 10
   *    }
   *
   * @typedef {Object.<string, boolean>} CssClasses
   */
  cssClasses: {[key:string]: boolean};

}
