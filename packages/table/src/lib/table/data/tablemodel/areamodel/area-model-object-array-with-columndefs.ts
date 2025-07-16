import { AreaModelObjectArray } from "./area-model-object-array";
import { ColumnDefIf } from "../column/column-def.if";
import { AreaIdent } from "../area-ident.type";


/**
 * Represents an area model defined by an object array with column definitions.
 *
 * @class AreaModelObjectArrayWithColumndefs
 * @description
 * The `AreaModelObjectArrayWithColumndefs` class extends {@link AreaModelObjectArray} to provide
 * a specialized implementation where column definitions are a primary constructor parameter.
 *
 * This class is particularly useful when working with table models where column definitions
 * are essential for defining the structure of the table, especially in CRUD operations
 * and other scenarios where column definitions need to be explicitly provided.
 *
 * The main distinction from its parent class is the constructor parameter order, which
 * prioritizes column definitions as a required parameter rather than an optional one.
 *
 * @template T - The type of objects in the array. Each object represents a row in the table.
 *
 * @extends {AreaModelObjectArray<T>}
 *
 * @example
 * // Basic usage with an array of objects and explicit column definitions
 * const rows = [
 *   { id: 1, name: 'John', age: 30 },
 *   { id: 2, name: 'Jane', age: 25 },
 *   { id: 3, name: 'Bob', age: 40 }
 * ];
 *
 * const columnDefs = [
 *   { property: 'id', headerLabel: 'ID', width: new Size(50, 'px') },
 *   { property: 'name', headerLabel: 'Name', width: new Size(150, 'px') },
 *   { property: 'age', headerLabel: 'Age', width: new Size(100, 'px') }
 * ];
 *
 * const bodyAreaModel = new AreaModelObjectArrayWithColumndefs<any>(
 *   'body',
 *   rows,
 *   columnDefs,
 *   30 // default row height
 * );
 *
 * @example
 * // Using with CrudTableModelFactory
 * function createTableModel() {
 *   const rows = fetchDataFromServer();
 *   const columnDefs = [
 *     { property: 'id', headerLabel: 'ID', width: new Size(50, 'px') },
 *     { property: 'name', headerLabel: 'Name', width: new Size(150, 'px') },
 *     { property: 'age', headerLabel: 'Age', width: new Size(100, 'px') }
 *   ];
 *
 *   const tableModel = TableFactory.buildByTypedRowsParam({
 *     rows,
 *     columnDefs,
 *     tableOptions: new TableOptions(),
 *     fixedLeftColumnCount: 0,
 *     fixedRightColumnCount: 1
 *   });
 *
 *   // The body model is an instance of AreaModelObjectArrayWithColumndefs
 *   const bodyModel = tableModel.getBodyModel() as AreaModelObjectArrayWithColumndefs<any>;
 *
 *   // Now you can work with the body model
 *   return bodyModel;
 * }
 *
 * @example
 * // Using custom row classes for selection and focus
 * const bodyAreaModel = new AreaModelObjectArrayWithColumndefs<any>(
 *   'body',
 *   rows,
 *   columnDefs,
 *   30, // default row height
 *   'my-custom-selected-row', // custom selected row class
 *   'my-custom-focused-row'   // custom focused row class
 * );
 *
 * @see {@link AreaModelObjectArray} - The parent class that provides the core functionality
 * @see {@link ColumnDefIf} - The interface that defines the structure of column definitions
 * @see {@link CrudTableModelFactory} - A factory class that uses this class for CRUD operations
 */

export class AreaModelObjectArrayWithColumndefs<T> extends AreaModelObjectArray<T> {


  /**
   * Creates an instance of AreaModelObjectArrayWithColumndefs.
   *
   * @param {AreaIdent} areaIdent - Identifies which area of the table this model represents ('header', 'body', or 'footer')
   * @param {T[]} rows - The array of objects that represent the rows in this area
   * @param {ColumnDefIf[]} columnDefs - Definitions for the columns in this area (required parameter)
   * @param {number} defaultRowHeight - The default height for rows in this area (in pixels)
   * @param {string} [selectedRowClass='ge-selected-row'] - CSS class to apply to selected rows
   * @param {string} [focusedRowClass='ge-focused-row'] - CSS class to apply to the focused row
   *
   * @example
   * const rows = [
   *   { id: 1, name: 'John', age: 30 },
   *   { id: 2, name: 'Jane', age: 25 }
   * ];
   *
   * const columnDefs = [
   *   { property: 'id', headerLabel: 'ID', width: new Size(50, 'px') },
   *   { property: 'name', headerLabel: 'Name', width: new Size(150, 'px') },
   *   { property: 'age', headerLabel: 'Age', width: new Size(100, 'px') }
   * ];
   *
   * const bodyAreaModel = new AreaModelObjectArrayWithColumndefs(
   *   'body',
   *   rows,
   *   columnDefs,
   *   30
   * );
   */
  constructor(
    public override areaIdent: AreaIdent,
    protected override rows: T[],
    protected override readonly columnDefs: ColumnDefIf[],
    public override defaultRowHeight: number,
    selectedRowClass: string = 'ge-selected-row',
    focusedRowClass: string = 'ge-focused-row'
  ) {
    super(
      areaIdent,
      rows,
      defaultRowHeight,
      columnDefs,
      selectedRowClass,
      focusedRowClass
    );
  }

}

