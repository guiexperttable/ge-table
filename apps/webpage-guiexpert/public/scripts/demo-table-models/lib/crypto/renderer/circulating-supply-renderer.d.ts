import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from '../../../../../table/src';
export declare class CirculatingSupplyRenderer implements CellRendererIf {
    private readonly maxWidth;
    private formatter;
    constructor(maxWidth?: number);
    render(cellDiv: HTMLDivElement, rowIndex: number, _columnIndex: number, _areaIdent: AreaIdent, areaModel: AreaModelIf, _cellValue: any, _domService: DomServiceIf): RendererCleanupFnType | undefined;
}
