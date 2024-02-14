import { RequestChunkIf } from "./request-chunk.if";
export interface ChunkDataIf<T> extends RequestChunkIf {
    rows: T[];
}
