import { TreeRow } from "../data/common/tree-row";

export class TreeRowService {

  flattenTree<T>(
    rows: TreeRow<T>[],
    ret: TreeRow<T>[] = []
  ): TreeRow<T>[] {

    for (const row of rows) {
      if (this.isVisible(row)) {
        ret.push(row);
      }
      if (row.children?.length) {
        this.flattenTree(row.children, ret);
      }
    }
    return ret;
  }

  isVisible(row: TreeRow<any>): boolean {
    if (!row.parent) {
      return true;
    }
    if (!row.parent.expanded) {
      return false;
    }
    return this.isVisible(row.parent);
  }

}
