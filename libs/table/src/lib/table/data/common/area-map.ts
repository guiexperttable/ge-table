import { AreaObjectMapType } from "./area-map.type";

export class AreaObjectMap<T> implements AreaObjectMapType<T> {

  constructor(
    public header?: T | undefined,
    public body?: T | undefined,
    public footer?: T | undefined) {
  }

}
