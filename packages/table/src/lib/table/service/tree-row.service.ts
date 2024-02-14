
import {TreeRowIf} from "../data/common/tree-row-if";

export class TreeRowService {

  flattenTree<T>(
    rows: TreeRowIf<T>[],
    ret: TreeRowIf<T>[] = []
  ): TreeRowIf<T>[] {

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

  isVisible(row: TreeRowIf<any>): boolean {
    if (!row.parent) {
      return true;
    }
    if (!row.parent.expanded) {
      return false;
    }
    return this.isVisible(row.parent);
  }

}
