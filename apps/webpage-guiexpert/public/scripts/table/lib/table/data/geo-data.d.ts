/**
 * Represents geometric data with left, width, height, top coordinates and an optional index.
 */
export declare class GeoData {
    left: number;
    width: number;
    height: number;
    top: number;
    index?: number | undefined;
    constructor(left?: number, width?: number, height?: number, top?: number, index?: number | undefined);
}
