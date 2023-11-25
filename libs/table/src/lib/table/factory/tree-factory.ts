import { TreeRow } from "../data/common/tree-row";
import {TreeRowIf} from "../data/common/tree-row-if";

export class TreeFactory {


  static buildTreeRows<T>(
    data: T[],
    childrenProperty: string = "children",
    deepMaxLimit: number = 12): TreeRowIf<T>[] {

    const ret: TreeRowIf<T>[] = [];
    for (const r of data) {
      ret.push(TreeFactory.buildTreeRow<T>(r, childrenProperty, undefined, 0, deepMaxLimit));
    }
    return ret;
  }


  static buildTreeRow<T>(
    data: T,
    childrenProperty: string = "children",
    parent: TreeRowIf<T> = new TreeRow<T>(data, true, [], undefined, 0), //, false , '0', '0'),
    deep: number = 0,
    deepMaxLimit: number = 12): TreeRowIf<T> {

    if (deep > deepMaxLimit) {
      console.warn("Max deep limit reached: ", deep);
      return parent;
    }
    // @ts-ignore
    const children: T[] | undefined = data[childrenProperty];
    if (children) {
      for (const r of children) {
        const tr = new TreeRow<T>(r, true, [], parent, deep + 1);
        parent.children?.push(tr);
        TreeFactory.buildTreeRow(
          r,
          childrenProperty,
          tr,
          deep + 1
        );
        if (deep > deepMaxLimit) {
          console.warn("Max deep limit reached: ", deep);
          return parent;
        }
      }
    }
    return parent;
  }
}

