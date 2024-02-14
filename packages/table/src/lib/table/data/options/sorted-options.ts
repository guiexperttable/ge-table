import { IconIf } from "./icon.if";
import { Icon } from "./icon";
import { SortedOptionsIf } from "./sorted-options.if";

export class SortedOptions implements SortedOptionsIf {

  constructor(
    public iconAsc: IconIf = new Icon("↑", "", ["ge-header-sorted-asc"]),
    public iconDesc: IconIf = new Icon("↓", "", ["ge-header-sorted-desc"]),
    public iconPlaceholder: IconIf = new Icon("↑", "color:transparent;", [])
  ) {
  }


}
