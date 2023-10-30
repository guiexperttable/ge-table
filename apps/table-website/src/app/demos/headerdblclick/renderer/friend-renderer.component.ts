import { ComponentRendererIf } from "@guiexpert/angular-table";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AreaIdent, AreaModelIf, RendererCleanupFnType } from "@guiexpert/table";
import { FriendIf } from "../data/friend.if";

/**
 * A [matTooltip]="text" causes a problem in this case!
 */
@Component({
  selector: "demo-friend-renderer",
  template: `
    <div
      [innerText]="text"
    >
    </div>
  `,
  styles: [`
    :host {
      width: 100%;
      height: 100%;
      display: block;
    }

    :host > div {
      text-align: left;
      text-overflow: ellipsis;
      overflow: clip;
      padding-left: 10px;
      padding-right: 10px;
      height: 100%;
      width: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendRendererComponent<T> implements ComponentRendererIf<T> {

  friends: FriendIf[] = [];
  text: string = "";

  setData(
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    cellValue: any): RendererCleanupFnType | undefined {

    this.friends = cellValue as FriendIf[];
    this.text = this.friends.map(f => f.name).join(", ");

    return undefined;
  }


}
