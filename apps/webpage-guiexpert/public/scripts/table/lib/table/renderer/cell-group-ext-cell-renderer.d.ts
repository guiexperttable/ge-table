import { AreaModelIf } from '../data/tablemodel/areamodel/area-model.if';
import { CellRendererIf } from './cell-render.if';
import { DomServiceIf } from '../service/dom-service.if';
import { AreaIdent } from '../data/tablemodel/area-ident.type';
import { RendererCleanupFnType } from './renderer-cleanup-fn.type';
import { CellGroupExt } from '../data/tablemodel/cellgroup/cell-group-ext';
import { HeaderGroupOptionsIf } from '../data/options/header-group-options.if';
export declare class CellGroupExtCellRenderer implements CellRendererIf {
    private headerGroupOptions;
    private static toggleHeaderGroup;
    constructor(headerGroupOptions?: HeaderGroupOptionsIf);
    render(cellDiv: HTMLDivElement, rowIndex: number, columnIndex: number, areaIdent: AreaIdent, _areaModel: AreaModelIf, cellValue: CellGroupExt | undefined | null, domService: DomServiceIf): RendererCleanupFnType | undefined;
    private addText;
    private addArrowDiv;
    applyStyleString(domService: DomServiceIf, div: HTMLDivElement, style: string): void;
}
