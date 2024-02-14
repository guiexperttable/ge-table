import { ColorRgbIf } from "./color-rgb.if";

export class ColorRgb implements ColorRgbIf {
  constructor(
    public r: number,
    public g: number,
    public b: number
  ) {
  }
}
