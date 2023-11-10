import {ComponentRendererIf} from "@guiexpert/angular-table";
import {ChangeDetectionStrategy, Component} from "@angular/core";
import {AreaIdent, AreaModelIf, RendererCleanupFnType} from "@guiexpert/table";

@Component({
  selector: 'demo-email-renderer',
  template: `
    <div>
      <strong>{{debug}}</strong>
      <span class="red-text">&#64;gmx</span>.<i>de</i>
    </div>
  `,
  styles: [`
    :host {
      width: 100%;
      height: 100%;
      display: block;
    }

    :host > div {
      background-color: rgba(252, 255, 215, 0.23);
      padding-left: 10px;
    }

    .red-text {
      color: #e00034;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailRendererComponent<T> implements ComponentRendererIf<T> {

  debug: string = 'TODO';

  setData(
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    cellValue: any): RendererCleanupFnType | undefined {
    this.debug = `${rowIndex}_${columnIndex}`;

    return undefined;
  }


}
