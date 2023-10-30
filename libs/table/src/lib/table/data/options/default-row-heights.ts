import { DefaultRowHeightsIf } from "./default-row-heights.if";

export class DefaultRowHeights implements DefaultRowHeightsIf {
  constructor(
    public header: number = 34,
    public body: number = 34,
    public footer: number = 34
  ) {
  }
}
