import { ColorRgbIf } from "./color-rgb.if";
import { TwoColorGradientArgIf } from "./two-color-gradient-arg.if";
export declare class TwoColorGradientArg implements TwoColorGradientArgIf {
    minValue: number;
    minColor: ColorRgbIf;
    maxValue: number;
    maxColor: ColorRgbIf;
    constructor(minValue: number, minColor: ColorRgbIf, maxValue: number, maxColor: ColorRgbIf);
}
