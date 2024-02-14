import { CellGroupIf } from "./cell-group.if";

export class CellGroup implements CellGroupIf {

  public impl = 'CellGroup';

  constructor(
    public data: any,
    public property?: string,
    public toggle?: boolean,
    public closed: boolean = false,
    public visibility: "always" | "inverted" | "normal" | undefined = "normal",
    public children: CellGroupIf[] | undefined = undefined
  ) {
  }


}
