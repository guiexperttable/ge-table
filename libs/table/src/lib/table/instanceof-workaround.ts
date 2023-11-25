

/*
 * necessary because of es5 (Svelte, Astro,...)
 */

export function isTreeRow(row: any): boolean {
  return row['type'] === 'TreeRow';
}



export function isAreaModelTree(model: any): boolean {
  return model['type'] === 'AreaModelTree';
}


export function isCheckboxColumnDef(o: any): boolean {
  return o['type'] === 'CheckboxColumnDef';
}


