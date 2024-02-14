

/**
 * Represents a (table) row in a tree structure. It's a container object for T with additional tree node information.@template T - The type of data stored in each row.
 */
export interface TreeRowIf<T> {
  type?:'TreeRow'|'';
  data: T;
  expanded: boolean;
  children: TreeRowIf<T>[] | undefined;
  parent: TreeRowIf<T> | undefined;
  deep: number;
  checked: boolean;
  keep: boolean;
}
