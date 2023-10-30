import {ComponentRendererIf} from "@guiexpert/angular-table";
import {ChangeDetectionStrategy, Component, EventEmitter, Output} from "@angular/core";
import {AreaIdent, AreaModelIf, RendererCleanupFnType} from "@guiexpert/table";
import {ActionId} from "./action-id";

@Component({
  selector: 'demo-action-button-renderer',
  template: `
    <div>
      <button (click)="onDeleteClicked($event, debug)">Delete</button>
      <button (click)="onEditClicked($event, debug)">Edit</button>
    </div>
  `,
  styles: [`
    :host {
      width: 100%;
      height: 100%;
      display: block;
    }

    :host > div {
      background-color: rgba(209, 250, 252, 0.3);
      padding-left: 10px;
    }

    button {
      margin-right: 10px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionButtonRendererComponent<T> implements ComponentRendererIf<T> {

  @Output()
  deletedClicked = new EventEmitter<ActionId>();

  @Output()
  editedClicked = new EventEmitter<ActionId>();

  debug: string = '';

  setData(
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    cellValue: any): RendererCleanupFnType | undefined {
    this.debug = `${rowIndex}_${columnIndex}`;

    return undefined;
  }

  onDeleteClicked(evt: MouseEvent, text: string) {
    this.deletedClicked.next(new ActionId('delete', text));
  }

  onEditClicked(evt: MouseEvent, text: string) {
    this.editedClicked.next(new ActionId('edit', text));
  }


}
