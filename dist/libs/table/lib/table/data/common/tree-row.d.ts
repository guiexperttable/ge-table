import { TreeRowIf } from "./tree-row-if";
export declare class TreeRow<T> implements TreeRowIf<T> {
    data: T;
    expanded: boolean;
    children: TreeRowIf<T>[] | undefined;
    parent: TreeRowIf<T> | undefined;
    deep: number;
    checked: boolean;
    keep: boolean;
    constructor(data: T, expanded: boolean, children: TreeRowIf<T>[] | undefined, parent: TreeRowIf<T> | undefined, deep?: number, checked?: boolean, keep?: boolean);
}
