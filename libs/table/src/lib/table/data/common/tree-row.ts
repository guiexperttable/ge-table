import { TreeRowIf } from "./tree-row-if";

export class TreeRow<T> implements TreeRowIf<T> {

  constructor(
    public data: T,
    public expanded: boolean = true,
    public children: TreeRowIf<T>[] | undefined,
    public parent: TreeRowIf<T> | undefined,
    public deep: number = 0,
    public checked: boolean = false,
    public keep: boolean = false
  ) {
  }

}
