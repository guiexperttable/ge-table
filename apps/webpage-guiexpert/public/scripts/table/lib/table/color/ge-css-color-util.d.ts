import { TwoColorGradientArgIf } from "./two-color-gradient-arg.if";
import { ThreeColorGradientArgIf } from "./three-color-gradient-arg.if";
export declare class GeCssColorUtil {
    static normalize(value: number, fromSource: number, toSource: number, fromTarget?: number, toTarget?: number): number;
    static getTwoColorGradientRGB(value: number, para: TwoColorGradientArgIf): string;
    static getThreeColorGradientRGB(value: number, para: ThreeColorGradientArgIf): string;
}
