import { ThemeRowIf } from "../data/theme-row.If";
import {
  AreaIdent,
  AreaModelObjectyArray,
  CellRendererIf,
  DomServiceIf,
  RendererCleanupFnType
} from "@guiexpert/table";


export class CssColorCellRenderer implements CellRendererIf {


  render(
    cellDiv: HTMLDivElement,
    _rowIndex: number,
    _columnIndex: number,
    _areaIdent: AreaIdent,
    _areaModel: AreaModelObjectyArray<ThemeRowIf>,
    cellValue: any,
    _domService: DomServiceIf): RendererCleanupFnType | undefined {

    cellDiv.innerHTML = `
      <div style="width:calc(100% - 2px);height:calc(100% - 2px);margin-left:1px; margin-top:1px;">
          <div style="width:100%;height:100%;border-radius:50%;margin:0;background:${cellValue} !important;"></div>
      </div>`;
    return undefined;
  }

}
