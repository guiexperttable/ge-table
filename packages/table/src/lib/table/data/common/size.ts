import { SizeIf } from "./size.if";

export class Size implements SizeIf {
  constructor(
    public value: number = 100,
    public unit: "px" | "%" = "px"
  ) {
  }
}
