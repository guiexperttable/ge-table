import { AreaObjectMapType } from "./area-map.type";

/**
 * An object map as container for all three areas.
 *
 * @template T - The type of objects stored in the map.
 * @class
 * @implements {AreaObjectMapType<T>}
 */
export class AreaObjectMap<T> implements AreaObjectMapType<T> {

  constructor(
    public header?: T | undefined,
    public body?: T | undefined,
    public footer?: T | undefined) {
  }

}
