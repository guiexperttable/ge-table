import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";
import { CryptoTopIf } from "../crypto-top.if";


export class NameAndSymbolRenderer implements CellRendererIf {


  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    _columnIndex: number,
    _areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    _cellValue: any,
    domService: DomServiceIf): RendererCleanupFnType | undefined {

    const coin: CryptoTopIf = areaModel.getRowByIndex(rowIndex);
    if (coin) {
      const name = coin.name ?? coin.symbol;
      cellDiv.innerHTML = `
      <div style="line-height: 1.2;padding: 10px 0 0 10px;">
        ${name}<br>
        ${coin.symbol}
      </div>
      `;
    }
    return undefined;
  }

}

