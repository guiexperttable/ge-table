import { TreeRowIf } from "./tree-row-if";
/**
 * Represents a (table) row in a tree structure. It's a container object for T with additional tree node information.
 * @template T - The type of data stored in the row.
 */
export declare class TreeRow<T> implements TreeRowIf<T> {
    data: T;
    expanded: boolean;
    children: TreeRowIf<T>[] | undefined;
    parent: TreeRowIf<T> | undefined;
    deep: number;
    checked: boolean;
    keep: boolean;
    type: 'TreeRow' | '';
    constructor(data: T, expanded: boolean, children: TreeRowIf<T>[] | undefined, parent: TreeRowIf<T> | undefined, deep?: number, checked?: boolean, keep?: boolean);
}
