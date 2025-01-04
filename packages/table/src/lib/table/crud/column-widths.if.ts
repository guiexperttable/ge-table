
export interface ColumnWidthsIf  {
  autoCalc: boolean;
  takeHeaderLabelsIntoAccount: boolean;
  charCountToWidth: (charCount: number, columnIndex:number) => number;
  minWidth: number;
  maxWidth: number;
}