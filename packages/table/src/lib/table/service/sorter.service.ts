export class SorterService {


  genericSortComparator(va: any, vb: any, f: number): number {
    if (typeof va === "number" && typeof vb === "number") {
      return f * (va - vb);
    }
    if (typeof va === "string" && typeof vb === "string") {
      return f * (va.localeCompare(vb));
    }
    if (typeof va === "boolean" && typeof vb === "boolean") {
      const a = va ? -1 : 1;
      const b = vb ? -1 : 1;
      return f * (a - b);
    }
    if (va instanceof Date && vb instanceof Date) {
      return f * (va.getTime() - vb.getTime());
    }
    if (va instanceof Array && vb instanceof Array) {
      const arr1: Array<any> = va;
      const arr2: Array<any> = vb;
      if (arr1.length && arr2.length) {
        return this.genericSortComparator(arr1[0], arr2[0], f);
      }
    }
    return f * ("" + va).localeCompare(("" + vb));
  }


}
