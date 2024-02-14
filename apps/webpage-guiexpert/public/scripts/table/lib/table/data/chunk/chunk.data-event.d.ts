import { ChunkDataIf } from "./chunk.data-event.if";
import { RequestChunk } from "./request-chunk";
export declare class ChunkData<T> extends RequestChunk implements ChunkDataIf<T> {
    rows: T[];
    constructor(emmitDataKey: string, emmitCancelKey: string, queryId: string, // which sql
    filter: string, // later: structure
    sorting: string, // list of (property & ASC/DESC)
    startIndex: number, endIndex: number, rows: T[]);
}
