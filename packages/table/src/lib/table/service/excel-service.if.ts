export interface ExcelServiceIf {

  downloadExcel(matrix: Array<Array<any>>, filename: string, author?: string): void;

}