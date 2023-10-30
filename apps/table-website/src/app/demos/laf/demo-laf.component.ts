import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit} from "@angular/core";
import { CellRange, CssVars, SelectionModel, TableApi, TableModelIf } from "@guiexpert/table";
import { generateSimpleModel } from "@guiexpert/demo-table-models";
import { SyncCssService } from "../../common/syncdata/sync-css.service";


@Component({
  selector: "demo-laf",
  templateUrl: "./demo-laf.component.html",

  styles: [`
    :host {
      display: grid;
      grid-template-rows: 1fr;
    }

    .header {
      padding: 12px;
      display: flex;
      gap: 12px;
      background-color: var(--ge-table-doc-demo-color);
    }

    guiexpert-table {
      margin: 0;
      width: 100%;
      height: calc(100vh - 220px);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoLafComponent implements OnInit, OnDestroy {

  selectionModel = new SelectionModel("range", "multi");
  tableModel: TableModelIf = generateSimpleModel(100, 100);
  themes = CssVars.themes;

  private tableApi?: TableApi;
  private alive = true;


  constructor(
    private readonly elementRef: ElementRef
  ) {
    this.tableModel.getSelectionModel = () => this.selectionModel;

    this.selectionModel.addSelection(new CellRange(0, 0, 0, 2));
    this.selectionModel.addSelection(new CellRange(2, 1, 2, 2));
    this.selectionModel.addSelection(new CellRange(1, 5, 6, 7));
    this.selectionModel.addSelection(new CellRange(0, 8, 0, 8));
    this.selectionModel.addSelection(new CellRange(5, 6, 10, 10));
  }

  ngOnInit(): void {
    const m = location.pathname.match(/\/demo\/(.*?)\/run/);
    if (m && m[1]) {
      new SyncCssService(m[1]).sync(this.elementRef.nativeElement, () => this.tableApi, () => this.alive);
    }
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  onTableReady(api: TableApi) {
    this.tableApi = api;
  }

  openCustomThemePicker() {
    const m = location.pathname.match(/\/demo\/(.*?)\/run/);
    const p = m ? "#" + m[1] : "";
    window.open(
      "themes/custom/picker" + p,
      "_blank",
      "left=100,top=100,width=720,height=755,location=0,scrollbars=0,status=0");
  }

  setTheme(theme: string) {
    // @ts-ignore
    const cssVars = CssVars.vars[theme];
    if (cssVars) {
      const nativeElement = this.elementRef.nativeElement;
      const kvs = this.cssVarString2KeyValueArray(cssVars);
      kvs.forEach(k => {
        nativeElement.style.setProperty(k[0], k[1]);
      });
      this.tableApi?.repaint();
    }
  }

  private cssVarString2KeyValueArray(css: string) {
    return css
      .replace(/;/g, '')
      .split("\n")
      .map(r => r.trim())
      .filter(r => r.includes("--ge-table"))
      .map(r => r.split(": ").map(s => s.trim()));
  }

}

