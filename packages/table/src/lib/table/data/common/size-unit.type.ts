
/**
 * Represents the possible unit types for specifying size.
 *  'px': width in pixel
 *  '%': width in percentage of container width
 *  'weight': after the width is set for columns with unit 'px' and '%', the remaining width is divided among the weighted columns according to their respective weighting.
 *
 * @typedef {"px" | "%" | "weight"} SizeUnitType
 */
export type SizeUnitType = "px" | "%"  | "weight";