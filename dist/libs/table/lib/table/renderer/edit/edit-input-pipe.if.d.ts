export interface editInputPipe {
    (input: any, rowIndex: number, columnIndex: number): any | undefined;
}
