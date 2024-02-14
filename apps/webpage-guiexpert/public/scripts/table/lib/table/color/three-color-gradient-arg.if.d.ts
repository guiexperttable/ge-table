import { ColorRgbIf } from "./color-rgb.if";
/**
 * Interface for defining the arguments of a three-color gradient.
 *
 * @interface
 */
export interface ThreeColorGradientArgIf {
    minValue: number;
    minColor: ColorRgbIf;
    middleValue: number;
    middleColor: ColorRgbIf;
    maxValue: number;
    maxColor: ColorRgbIf;
}
