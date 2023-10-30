import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";
export declare class ComponentRendererWrapper implements CellRendererIf {
    private readonly Component;
    constructor(Component: any);
    render(cellDiv: HTMLDivElement, rowIndex: number, columnIndex: number, areaIdent: AreaIdent, areaModel: AreaModelIf, cellValue: any, domService: DomServiceIf): RendererCleanupFnType | undefined;
}
