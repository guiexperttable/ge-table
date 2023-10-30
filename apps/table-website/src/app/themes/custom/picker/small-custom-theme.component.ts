import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SyncCssService } from "../../../common/syncdata/sync-css.service";
import { CustomThemeComponent } from "../custom-theme.component";
import { TableOptions } from "@guiexpert/table";

@Component({
  selector: "app-small-custom-theme",
  templateUrl: "../custom-theme.component.html",
  styleUrls: ["./small-custom-theme.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallCustomThemeComponent extends CustomThemeComponent {

  protected override syncCssService: SyncCssService;


  constructor(
    public override readonly dialog: MatDialog,
    protected override readonly elementRef: ElementRef,
    protected override readonly cdr: ChangeDetectorRef
  ) {
    super(dialog, elementRef, cdr);
    this.bigScreen = false;
    this.tableOptions = {
      ...new TableOptions(),
      hoverColumnVisible: false,
      columnsDraggable: false,
      externalFilterFunction: this.filterFn.bind(this)
    };
    this.theme = "dark";
    this.light = false;

    const hash = location.hash.replace(/#/g, "");
    this.syncCssService = new SyncCssService(hash ? hash : "sync-css-vars");
  }

}
