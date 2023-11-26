

/*
 * necessary because of es5 (Svelte, Astro,...)
 */

export function isTreeRow(row: any): boolean {
  return row && row['type'] === 'TreeRow';
}



export function isAreaModelTree(model: any): boolean {
  return model && model['type'] === 'AreaModelTree';
}


export function isCheckboxColumnDef(o: any): boolean {
  return o && o['type'] === 'CheckboxColumnDef';
}


