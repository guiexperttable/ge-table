import { AreaModelIf } from '../data/tablemodel/areamodel/area-model.if';
import { CellRendererIf } from './cell-render.if';
import { DomServiceIf } from '../service/dom-service.if';
import { AreaIdent } from '../data/tablemodel/area-ident.type';
import { RendererCleanupFnType } from './renderer-cleanup-fn.type';
import { CellGroupExt } from '../data/tablemodel/cellgroup/cell-group-ext';
import { HeaderGroupOptions } from '../data/options/header-group-options';
import { HeaderGroupOptionsIf } from '../data/options/header-group-options.if';
import { IconIf } from '../data/options/icon.if';


export class CellGroupExtCellRenderer implements CellRendererIf {

  private static toggleHeaderGroup = 'toggleHeaderGroup';

  constructor(
    private headerGroupOptions: HeaderGroupOptionsIf = new HeaderGroupOptions()
  ) {
  }


  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    _areaModel: AreaModelIf,
    cellValue: CellGroupExt | undefined | null,
    domService: DomServiceIf,

  ): RendererCleanupFnType | undefined {

    const label = cellValue?.data ? cellValue.data : '';
    if (cellValue) {
      const { toggle, visibility, closed } = cellValue;

      const action = toggle ? CellGroupExtCellRenderer.toggleHeaderGroup : '';
      this.addText(cellDiv, areaIdent, rowIndex, columnIndex, label, action);
      if (toggle && visibility !== 'always') {
        this.addArrowDiv(domService, cellDiv, !closed, rowIndex, columnIndex, areaIdent, action);
      }
    } else {
      this.addText(cellDiv, areaIdent, rowIndex, columnIndex, label, '');
    }
    return undefined;
  }


  private addText(
    cellDiv: HTMLDivElement,
    areaIdent: 'header' | 'body' | 'footer',
    rowIndex: number,
    columnIndex: number,
    label: string,
    action:string) {

    cellDiv.innerHTML = `<span 
                data-ge-action="${action}"
                data-area="${areaIdent}"
                data-row-index="${rowIndex}"
                data-col-index="${columnIndex}"
                >${label}</span>`;
  }

  private addArrowDiv(
    domService: DomServiceIf,
    parent: HTMLDivElement,
    expanded: boolean = true,
    rowIndex: number = -1,
    columnIndex: number = -1,
    areaIdent: AreaIdent = 'header',
    action:string
  ): HTMLDivElement {

    const div = domService.createElement<HTMLDivElement>('div');
    domService.addClass(div, 'ge-table-toggle-icon-div');
    domService.setStyle(div, 'display', 'inline-block');
    domService.setStyle(div, 'position', '');
    domService.setStyle(div, 'width', '20px');
    domService.setStyle(div, 'background', 'transparent');
    domService.setStyle(div, 'cursor', 'pointer');
    domService.setAttribute(div, 'data-row-index', `${rowIndex}`);
    domService.setAttribute(div, 'data-col-index', `${columnIndex}`);
    domService.setAttribute(div, 'data-area', `${areaIdent}`);
    domService.setAttribute(div, 'data-ge-action', `${action}`);

    let treeOptionsArrow: IconIf;
    if (expanded) {
      treeOptionsArrow = this.headerGroupOptions.iconExpanded;
    } else {
      treeOptionsArrow = this.headerGroupOptions.iconCollapsed;
    }
    // Text:
    const content = treeOptionsArrow.content;
    const textElement = domService.createText(content);
    domService.appendChild(div, textElement);

    // Style:
    if (treeOptionsArrow.style) {
      this.applyStyleString(domService, div, treeOptionsArrow.style);
    }

    // Classes:
    for (const clazz of treeOptionsArrow.classes) {
      domService.addClass(div, clazz);
    }

    domService.appendChild(parent, div);
    return div;
  }


  applyStyleString(domService: DomServiceIf, div: HTMLDivElement, style: string) {
    // transform: rotate(-90deg) translate(-100%, 0); transform-origin: left top; font-size: 1.5em;
    const cmds = style.split(';').map(s => s.trim()).filter(s => s);
    for (const cmd of cmds) {
      const [key, value] = cmd.split(':');
      domService.setStyle(div, key.trim(), value.trim());
    }
  }


}
