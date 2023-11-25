

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
