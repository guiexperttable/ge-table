import { IconIf } from "./icon.if";
import { TreeOptionsIf } from "./tree-options.if";
import { Icon } from "./icon";

export class TreeOptions implements TreeOptionsIf {

  constructor(
    public arrowExpanded: IconIf = new Icon(
      ">",
      "transform: rotate(90deg) translate(66%, -66%); transform-origin: 0 0;",
      ["gt-table-tree-arrow-expanded"]
    ),
    public arrowCollapsed: IconIf = new Icon(
      ">",
      "",
      ["ge-table-tree-arrow-collapsed"]
    ),
    public arrowPlaceholder: IconIf = new Icon(
      ">",
      "color:transparent;",
      ["gt-table-tree-arrow-hidden"]
    ),
    public arrowExpandCollapseAll: IconIf = new Icon(
      "↕",
      "",
      ["gt-table-tree-arrow-expanded-all"]
    )
  ) {
  }


}
