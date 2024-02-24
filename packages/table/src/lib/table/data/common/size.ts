import { SizeIf } from "./size.if";
import { SizeUnitType } from './size-unit.type';

export class Size implements SizeIf {
  constructor(
    public value: number = 100,
    public unit: SizeUnitType = "px"
  ) {
  }
}
