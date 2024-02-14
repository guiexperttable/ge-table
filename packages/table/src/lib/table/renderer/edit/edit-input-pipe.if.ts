

/**
 * Represents an editInputPipe function.
 * @typedef {Function} editInputPipe
 * @param {any} input - The input object.
 * @param {number} rowIndex - The index of the row.
 * @param {number} columnIndex - The index of the column.
 * @returns {any|undefined} - The modified input object or undefined.
 */
export interface editInputPipe {
  (input: any, rowIndex: number, columnIndex: number): any | undefined;
}


