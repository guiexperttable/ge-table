

/*
 * necessary because of es5 (Svelte, Astro,...)
 */

/**
 * Checks if the given row is a tree row.
 *
 * @param {any} row - The row to be checked.
 *
 * @return {boolean} - true if the row is a tree row, false otherwise.
 */
export function isTreeRow(row: any): boolean {
  return row && row['type'] === 'TreeRow';
}



/**
 * Determines if the given model is an AreaModelTree.
 *
 * @param {any} model - The model object to check.
 * @return {boolean} - True if the model is an AreaModelTree, false otherwise.
 */
export function isAreaModelTree(model: any): boolean {
  return model && model['type'] === 'AreaModelTree';
}


/**
 * Checks if the given object is a CheckboxColumnDef.
 *
 * @param {any} o - The object to be checked.
 * @returns {boolean} - True if the object is a CheckboxColumnDef, false otherwise.
 */
export function isCheckboxColumnDef(o: any): boolean {
  return o && o['type'] === 'CheckboxColumnDef';
}


