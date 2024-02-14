export interface RequestChunkIf {
    emmitDataKey: string;
    emmitCancelKey: string;
    queryId: string;
    filter: string;
    sorting: string;
    startIndex: number;
    endIndex: number;
}
