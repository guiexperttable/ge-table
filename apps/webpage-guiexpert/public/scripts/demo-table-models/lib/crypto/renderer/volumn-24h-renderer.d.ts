import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from '../../../../../table/src';
export declare class Volumn24hRenderer implements CellRendererIf {
    private formatterUsd;
    private formatter;
    render(cellDiv: HTMLDivElement, rowIndex: number, _columnIndex: number, _areaIdent: AreaIdent, areaModel: AreaModelIf, _cellValue: any, _domService: DomServiceIf): RendererCleanupFnType | undefined;
}
