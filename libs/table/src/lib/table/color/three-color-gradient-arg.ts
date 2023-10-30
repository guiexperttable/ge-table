import { ColorRgbIf } from "./color-rgb.if";
import { ThreeColorGradientArgIf } from "./three-color-gradient-arg.if";

export class ThreeColorGradientArg implements ThreeColorGradientArgIf {
  constructor(
    public minValue: number,
    public minColor: ColorRgbIf,
    public middleValue: number,
    public middleColor: ColorRgbIf,
    public maxValue: number,
    public maxColor: ColorRgbIf
  ) {
  }
}
