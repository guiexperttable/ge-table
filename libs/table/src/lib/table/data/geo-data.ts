/**
 * Represents geometric data with left, width, height, top coordinates and an optional index.
 */
export class GeoData {

  constructor(
    public left: number = 0,
    public width: number = 0,
    public height: number = 0,
    public top: number = 0,
    public index?: number
  ) {
  }


}
