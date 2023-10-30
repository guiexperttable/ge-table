import { IconIf } from "./icon.if";

export class Icon implements IconIf {
  constructor(
    public content: string = ">",
    public style: string = "",
    public classes: string[] = []
  ) {
  }
}
