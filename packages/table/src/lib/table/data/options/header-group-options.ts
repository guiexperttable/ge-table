import { IconIf } from "./icon.if";
import { Icon } from "./icon";
import { HeaderGroupOptionsIf } from './header-group-options.if';

export class HeaderGroupOptions implements HeaderGroupOptionsIf {

  constructor(
    public iconExpanded: IconIf = new Icon(
      "❯",
      "",
      ["gt-table-icon-expanded"]
    ),
    public iconCollapsed: IconIf = new Icon(
      "❯",
      "transform: rotate(180deg) translate(-100%, -100%); transform-origin: 0 0;",
      ["ge-table-icon-collapsed"]
    )
  ) {
  }

  // `⊖ `,  `⊕ `;

}
