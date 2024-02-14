import { ColorRgbIf } from "./color-rgb.if";
import { ThreeColorGradientArgIf } from "./three-color-gradient-arg.if";
export declare class ThreeColorGradientArg implements ThreeColorGradientArgIf {
    minValue: number;
    minColor: ColorRgbIf;
    middleValue: number;
    middleColor: ColorRgbIf;
    maxValue: number;
    maxColor: ColorRgbIf;
    constructor(minValue: number, minColor: ColorRgbIf, middleValue: number, middleColor: ColorRgbIf, maxValue: number, maxColor: ColorRgbIf);
}
