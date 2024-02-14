import { ColorRgbIf } from "./color-rgb.if";
/**
 * Interface representing arguments for a two-color gradient.
 * @interface
 */
export interface TwoColorGradientArgIf {
    minValue: number;
    minColor: ColorRgbIf;
    maxValue: number;
    maxColor: ColorRgbIf;
}
