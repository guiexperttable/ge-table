import { AreaObjectMapType } from "./area-map.type";
/**
 * An object map as container for all three areas.
 *
 * @template T - The type of objects stored in the map.
 * @class
 * @implements {AreaObjectMapType<T>}
 */
export declare class AreaObjectMap<T> implements AreaObjectMapType<T> {
    header?: T | undefined;
    body?: T | undefined;
    footer?: T | undefined;
    constructor(header?: T | undefined, body?: T | undefined, footer?: T | undefined);
}
