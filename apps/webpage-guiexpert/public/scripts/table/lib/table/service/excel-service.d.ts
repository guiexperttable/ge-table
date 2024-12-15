import { ExcelServiceIf } from './excel-service.if';
export declare class ExcelService implements ExcelServiceIf {
    /**
     * Downloads a matrix data as an Excel file.
     *
     * @param {Array<Array<any>>} matrix - A 2D array representing the data to be included in the Excel file. Each inner array corresponds to a row in the sheet.
     * @param {string} [filename='file.xlsx'] - The name of the Excel file to be downloaded. Defaults to 'file.xlsx'.
     * @param {string} [author=''] - The author's name to include as metadata in the Excel file. Optional parameter.
     * @return {void} Does not return a value.
     * @throws {Error} Throws an error if the input matrix is not a valid 2D array or if the filename is an empty string.
     */
    downloadExcel(matrix: Array<Array<any>>, filename?: string, author?: string): void;
    private generateMap;
    private getX1WorksheetsSheet1Xml;
    private escapeXml;
    private getCellAddress;
    createZip(files: Map<string, string>): Uint8Array;
    private generateBuffer;
}
