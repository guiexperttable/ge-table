import { AreaIdent, SideIdent } from "@guiexpert/table";
import { OkLch } from "./ok-lch";

import { ThemeRowIf } from "./theme-row.If";

export class ThemeRow implements ThemeRowIf {
  constructor(
    public selected: boolean,
    public id: string,
    public area: AreaIdent|'',
    public side: SideIdent|'',
    public type: "bg" | "text" | "border"|"",
    public okLch: OkLch|undefined,
    public value: string = '',
  ) {
  }
}
