import { RequestChunkIf } from "./request-chunk.if";
export declare class RequestChunk implements RequestChunkIf {
    emmitDataKey: string;
    emmitCancelKey: string;
    queryId: string;
    filter: string;
    sorting: string;
    startIndex: number;
    endIndex: number;
    constructor(emmitDataKey: string, emmitCancelKey: string, queryId: string, // which sql
    filter: string, // later: structure
    sorting: string, // list of (property & ASC/DESC)
    startIndex: number, endIndex: number);
}
