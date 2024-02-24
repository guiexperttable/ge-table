import { SizeUnitType } from './size-unit.type';

/**
 * Represents a size with a value and unit. At the moment only unit 'px' is implemented in the calculations.
 * @interface
 */
export interface SizeIf {
  value: number;
  unit: SizeUnitType;
}
