import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";
import { CryptoTopIf } from "../crypto-top.if";


export class CoinIconRenderer implements CellRendererIf {


  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    _columnIndex: number,
    _areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    _cellValue: any,
    _domService: DomServiceIf): RendererCleanupFnType | undefined {

    const coin: CryptoTopIf = areaModel.getRowByIndex(rowIndex);
    if (coin?.id) {
      cellDiv.innerHTML = `<img src="https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png" style="width:30px;height: 30px;margin: 10px 10px 0 20px;">`;
    }
    return undefined;
  }

}

