import { AreaIdent, SideIdent } from "@guiexpert/table";
import { OkLch } from "./ok-lch";

export interface ThemeRowIf {
  selected: boolean;
  id: string;
  area: AreaIdent | "";
  side: SideIdent | "";
  type: "bg" | "text" | "border" | "";
  okLch: OkLch | undefined,
  value: string,
}
