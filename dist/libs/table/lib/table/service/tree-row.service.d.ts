import { TreeRow } from "../data/common/tree-row";
export declare class TreeRowService {
    flattenTree<T>(rows: TreeRow<T>[], ret?: TreeRow<T>[]): TreeRow<T>[];
    isVisible(row: TreeRow<any>): boolean;
}
