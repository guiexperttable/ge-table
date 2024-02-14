export declare class CollapsedExpandedData {
    mode: "collapsed" | "expanded";
    rowIds: Array<string | number>;
    allCollapsed: boolean;
    allExpanded: boolean;
    constructor(mode?: "collapsed" | "expanded", rowIds?: Array<string | number>, allCollapsed?: boolean, allExpanded?: boolean);
}
