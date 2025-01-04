import { ColumnWidthsIf } from './column-widths.if';


export class ColumnWidths implements ColumnWidthsIf {

  constructor(
    public autoCalc: boolean = true,
    public takeHeaderLabelsIntoAccount: boolean = true,
    public charCountToWidth: (charCount: number, columnIndex:number) => number = (charCount: number, _columnIndex:number) => charCount * 10 + 10,
    public minWidth: number = 50,
    public maxWidth: number = 450
  ) {
  }

}