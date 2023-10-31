import {ChunkDataIf} from "./chunk.data-event.if";
import {RequestChunk} from "./request-chunk";

export class ChunkData<T> extends RequestChunk implements ChunkDataIf<T> {

  constructor(
    emmitDataKey: string,
    emmitCancelKey: string,
    queryId: string, // which sql
    filter: string, // later: structure
    sorting: string, // list of (property & ASC/DESC)
    startIndex: number,
    endIndex: number,
    public rows: T[]) {

    super(
      emmitDataKey,
      emmitCancelKey,
      queryId,
      filter,
      sorting,
      startIndex,
      endIndex
    );
  }

}
