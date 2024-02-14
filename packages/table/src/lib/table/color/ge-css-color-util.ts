import { TwoColorGradientArgIf } from "./two-color-gradient-arg.if";
import { ThreeColorGradientArgIf } from "./three-color-gradient-arg.if";
import { TwoColorGradientArg } from "./two-color-gradient-arg";

export class GeCssColorUtil {


  static normalize(
    value: number,
    fromSource: number,
    toSource: number,
    fromTarget: number = 0,
    toTarget: number = 1) {
    return (value - fromSource) / (toSource - fromSource) * (toTarget - fromTarget) + fromTarget;
  }


  static getTwoColorGradientRGB(value: number, para: TwoColorGradientArgIf): string {
    const factor = GeCssColorUtil.normalize(value, para.minValue, para.maxValue, 0, 1);

    const diffRed = para.maxColor.r - para.minColor.r;
    const diffGreen = para.maxColor.g - para.minColor.g;
    const diffBlue = para.maxColor.b - para.minColor.b;

    const r = (diffRed * factor) + para.minColor.r;
    const g = (diffGreen * factor) + para.minColor.g;
    const b = (diffBlue * factor) + para.minColor.b;

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  }


  static getThreeColorGradientRGB(value: number, para: ThreeColorGradientArgIf): string {
    if (value < para.middleValue) {
      return GeCssColorUtil.getTwoColorGradientRGB(value, new TwoColorGradientArg(para.minValue, para.minColor, para.middleValue, para.middleColor));
    }
    if (value > para.middleValue) {
      return GeCssColorUtil.getTwoColorGradientRGB(value, new TwoColorGradientArg(para.middleValue, para.middleColor, para.maxValue, para.maxColor));
    }
    return `rgb(${para.middleColor.r}, ${para.middleColor.g}, ${para.middleColor.b})`;
  }

}
