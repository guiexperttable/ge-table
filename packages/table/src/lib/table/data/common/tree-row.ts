import { TreeRowIf } from "./tree-row-if";

/**
 * Represents a (table) row in a tree structure. It's a container object for T with additional tree node information.
 * @template T - The type of data stored in the row.
 */
export class TreeRow<T> implements TreeRowIf<T> {

  public type:'TreeRow'|'' = 'TreeRow';

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
