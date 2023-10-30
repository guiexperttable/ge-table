import { AreaObjectMapType } from "./area-map.type";
export declare class AreaObjectMap<T> implements AreaObjectMapType<T> {
    header?: T | undefined;
    body?: T | undefined;
    footer?: T | undefined;
    constructor(header?: T | undefined, body?: T | undefined, footer?: T | undefined);
}
