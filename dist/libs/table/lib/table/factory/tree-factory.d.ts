import { TreeRow } from "../data/common/tree-row";
export declare class TreeFactory {
    static buildTreeRows<T>(data: T[], childrenProperty?: string, deepMaxLimit?: number): TreeRow<T>[];
    static buildTreeRow<T>(data: T, childrenProperty?: string, parent?: TreeRow<T>, //, false , '0', '0'),
    deep?: number, deepMaxLimit?: number): TreeRow<T>;
}
