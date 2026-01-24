/**
 * Scroll event containing position and size information.
 */
export class GeScrollEvent {

  constructor(
    public scrollTop: number,
    public scrollLeft: number,
    public scrollHeight: number,
    public scrollWidth: number,
    public clientHeight: number,
    public clientWidth: number,
    public scrollFactorY: number,
    public scrollFactorX: number,
  ) {
  }
}