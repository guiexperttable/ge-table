import { TreeRowIf } from "../data/common/tree-row-if";
export declare class TreeFactory {
    static buildTreeRows<T>(data: T[], childrenProperty?: string, deepMaxLimit?: number): TreeRowIf<T>[];
    static buildTreeRow<T>(data: T, childrenProperty?: string, parent?: TreeRowIf<T>, //, false , '0', '0'),
    deep?: number, deepMaxLimit?: number): TreeRowIf<T>;
}
