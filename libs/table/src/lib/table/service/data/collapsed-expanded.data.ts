export class CollapsedExpandedData {

  constructor(
    public mode: "collapsed" | "expanded" = "collapsed",
    public rowIds: Array<string | number> = [],
    public allCollapsed: boolean = false,
    public allExpanded: boolean = false
  ) {
  }

}
