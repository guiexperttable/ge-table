import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";
import { CryptoTopIf } from "../crypto-top.if";


export class CirculatingSupplyRenderer implements CellRendererIf {

  private formatterUsd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  private formatter = new Intl.NumberFormat("en-US");

  constructor(
    private readonly maxWidth: number = 120) {
  }

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
      const cs = this.formatter.format(coin.circulatingSupply);
      const max = coin.maxSupply;
      const buf: string[] = [];
      buf.push("<div style=\"line-height: 1.2;padding: 10px 0 0 10px;\">");
      buf.push(cs);
      buf.push("<br>");
      if (max) {
        const w = this.maxWidth * coin.circulatingSupply / max;
        buf.push(`
          <div style="width: ${this.maxWidth}px;height: 5px;background-color: #eee;margin:10px 0 0 10px">
            <div style="width: ${w}px;height: 5px;background-color: #ccc;"></div>
          </div>
        `);
      }
      buf.push("</div>");

      cellDiv.innerHTML = buf.join("");
    }
    return undefined;
  }

}

