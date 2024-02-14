import { TreeRowIf } from "../data/common/tree-row-if";
export declare class TreeRowService {
    flattenTree<T>(rows: TreeRowIf<T>[], ret?: TreeRowIf<T>[]): TreeRowIf<T>[];
    isVisible(row: TreeRowIf<any>): boolean;
}
