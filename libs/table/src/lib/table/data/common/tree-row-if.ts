import { TreeRow } from "./tree-row";

export interface TreeRowIf<T> {
  data: T;
  expanded: boolean;
  children: TreeRow<T>[] | undefined;
  parent: TreeRow<T> | undefined;
  deep: number;
  checked: boolean;
  keep: boolean;
}
