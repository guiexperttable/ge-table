import {RequestChunkIf} from "./request-chunk.if";

export class RequestChunk implements RequestChunkIf {

  constructor(
    public emmitDataKey: string,
    public emmitCancelKey: string,
    public queryId: string, // which sql
    public filter: string, // later: structure
    public sorting: string, // list of (property & ASC/DESC)
    public startIndex: number,
    public endIndex: number) {
  }

}
