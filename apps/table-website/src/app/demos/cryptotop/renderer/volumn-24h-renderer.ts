import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";
import { CryptoTopIf } from "../crypto-top.if";


export class Volumn24hRenderer implements CellRendererIf {

  private formatterUsd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  private formatter = new Intl.NumberFormat("en-US");


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
      const usd = this.formatterUsd.format(coin.volUsd);
      const btc = this.formatter.format(coin.volBtc);
      cellDiv.innerHTML = `
      <div style="line-height: 1.2;padding: 10px 0 0 10px;">
        ${usd}<br>
        ${btc} BTC
      </div>
      `;
    }
    return undefined;
  }

}

