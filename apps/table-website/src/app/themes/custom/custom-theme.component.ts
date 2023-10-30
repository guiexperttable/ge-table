import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit
} from "@angular/core";
import { OkLch } from "../data/ok-lch";
import {
  AreaModelObjectyArray,
  CssVars,
  GeFilterService,
  SelectionModel,
  TableApi,
  TableModelIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
import { createThemeTableModel } from "../data/createThemeTableModel";
import { ThemeRowIf } from "../data/theme-row.If";
import { debounceTime, takeWhile } from "rxjs";
import { ExportDialogComponent } from "./exportdialog/export-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { SyncCssService } from "../../common/syncdata/sync-css.service";

@Component({
  selector: "app-custom-theme",
  templateUrl: "./custom-theme.component.html",
  styleUrls: ["./custom-theme.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomThemeComponent implements OnInit, OnDestroy {

  public theme = "light";
  public light = true;
  public arr = [
    [100, 0.2],
    [95, 0.2],
    [90, 0.2],
    [85, 0.2],
    [80, 0.2],
    [75, 0.2],
    [70, 0.25],
    [65, 0.31],
    [60, 0.27],
    [55, 0.27],
    [50, 0.27],
    [45, 0.25],
    [40, 0.25],
    [35, 0.25],
    [30, 0.2],
    [25, 0.2],
    [20, 0.2],
    [15, 0.2],
    [10, 0.2],
    [5, 0.2]
  ];
  public hueValues: number[] = [];
  public percentages: number[] = [];
  public chromas: number[] = [];

  public okLch = new OkLch(50, .27, 266, 100);
  public url = "";
  public cssString = "";
  public themes = CssVars.themes;
  selectedCount = 0;

  filterText = ""; // try: '+body + bg'

  readonly selectionModel = new SelectionModel("row", "multi");
  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    columnsDraggable: false,
    getSelectionModel: () => this.selectionModel,
    externalFilterFunction: this.filterFn.bind(this)
  };
  tableModel: TableModelIf | undefined;

  public selectedHtml5PickerColor: string = "#000000";
  protected filterService = new GeFilterService();
  protected tableApi?: TableApi;
  protected filter$ = new EventEmitter<number>();
  protected alive = true;
  protected guiTable?: HTMLDivElement;

  protected bigScreen = true;

  protected syncCssService = new SyncCssService("sync-css-vars");


  constructor(
    public readonly dialog: MatDialog,
    protected readonly elementRef: ElementRef,
    protected readonly cdr: ChangeDetectorRef
  ) {
    for (let i = 0; i < 100; i++) {
      this.hueValues.push(i * 3.6);
    }
    for (let i = 0; i < 100; i++) {
      this.percentages.push(i);
    }
    for (let i = 0; i < 100; i++) {
      this.chromas.push(0.333 / 100 * i);
    }
  }

  ngOnInit(): void {
    this.tableModel = createThemeTableModel(this.tableOptions, !this.light, this.bigScreen);
    this.calc();
    this.filter$
      .pipe(
        takeWhile(() => this.alive),
        debounceTime(400)
      )
      .subscribe(() => {
        this.tableApi?.externalFilterChanged();
      });
    this.guiTable = this.elementRef.nativeElement.querySelector("guiexpert-table");
    this.syncAllCssVarsToPickerTable();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  onKeyup() {
    this.unSelectAll();
    this.filter$.next(Date.now());
  }

  setFilter(text: string, select: boolean = true) {
    this.unSelectAll();
    this.filterText = text;
    this.tableApi?.externalFilterChanged();
    if (select) {
      this.selectVisible();
    }
  }

  selectItems(what: string = "") {
    const bodyModel = this.tableModel?.getBodyModel() as AreaModelObjectyArray<ThemeRowIf>;
    if (bodyModel) {
      const rc = bodyModel.getRowCount();
      for (let i = 0; i < rc; i++) {
        const key = bodyModel?.getValueAt(i, 1);
        if (key.includes(what)) {
          bodyModel?.setValue(i, 0, true);
        }
      }
      this.tableApi?.repaint();
      this.selectedCount = bodyModel.getAllRows().filter(r => r.selected).length;
      this.cdr.detectChanges();
    }
  }

  unselectItems(what: string = "") {
    const bodyModel = this.tableModel?.getBodyModel() as AreaModelObjectyArray<ThemeRowIf>;
    if (bodyModel) {
      const rc = bodyModel.getRowCount();
      for (let i = 0; i < rc; i++) {
        const key = bodyModel?.getValueAt(i, 1);
        if (key.includes(what)) {
          bodyModel?.setValue(i, 0, false);
        }
      }
      this.tableApi?.repaint();
      this.selectedCount = bodyModel.getAllRows().filter(r => r.selected).length;
      this.cdr.detectChanges();
    }
  }


  setPredefinedTheme(theme: string) {
    // @ts-ignore
    const cssVars = CssVars.vars[theme];
    if (cssVars) {
      const kvs = this.cssVarString2KeyValueArray(cssVars);
      const map: { [key: string]: string } = {};
      kvs.forEach(k => {
        map[k[0]] = k[1];
      });

      const bodyModel = this.tableModel?.getBodyModel() as AreaModelObjectyArray<ThemeRowIf>;
      if (bodyModel) {
        const rc = bodyModel.getRowCount();
        for (let i = 0; i < rc; i++) {
          const row: ThemeRowIf = bodyModel.getRowByIndex(i);
          const key = row.id;
          row.selected = true;
          row.value = map[key];
        }
        this.tableApi?.repaint();
        this.selectedCount = rc;
        this.cdr.detectChanges();
        this.syncAllCssVarsToPickerTable();
      }
    }
  }

  onTableReady($event: TableApi) {
    this.tableApi = $event;
    if (this.filterText) {
      this.tableApi?.externalFilterChanged();
    }
  }

  setTheme(m: "light" | "dark") {
    this.theme = m;
    this.light = m === "light";
    // destroy table element:
    this.tableModel = undefined;
    this.cdr.detectChanges();
    // rebuild:
    this.tableModel = createThemeTableModel(this.tableOptions, !this.light);
    this.cdr.detectChanges();
    this.guiTable = this.elementRef.nativeElement.querySelector("guiexpert-table");
    this.syncAllCssVarsToPickerTable();
  }

  setOkLch(l: number, c: number, h: number, a: number = 100) {
    this.okLch = new OkLch(l, c, h, a);
    this.calc();
  }

  formatLabelHue(value: number): string {
    return `Hue:${value}deg`;
  }

  formatLabelAlpha(value: number): string {
    return `a:${value}`;
  }

  formatLabelChroma(value: number): string {
    return `c:${value}`;
  }

  formatLabelLightness(value: number): string {
    return `l:${value}`;
  }

  onSliderChangedHue(h: number) {
    this.okLch.h = h;
    this.calc();
  }

  onSliderChangedAlpha(a: number) {
    this.okLch.a = a;
    this.calc();
  }

  onSliderChangedChroma(c: number) {
    this.okLch.c = c;
    this.calc();
  }

  onSliderChangedLightness(l: number) {
    this.okLch.l = l;
    this.calc();
  }

  calc() {
    this.setCssString(this.okLch.toCssString());
  }

  colorPickerChanged($event: Event) {
    if (($event.target as HTMLInputElement).value) {
      this.selectedHtml5PickerColor = ($event.target as HTMLInputElement).value;
      this.setCssString(this.selectedHtml5PickerColor);
      this.cdr.detectChanges();
    }
  }

  selectVisible() {
    if (this.tableModel) {
      const m = this.tableModel.getBodyModel() as AreaModelObjectyArray<ThemeRowIf>;
      const rows = m.getFilteredRows();
      for (const row of rows) {
        row.selected = true;
      }
      this.cdr.detectChanges();
      if (this.tableApi) {
        this.tableApi.repaint();
      }
      this.selectedCount = m.getAllRows().filter(r => r.selected).length;
      this.cdr.detectChanges();
    }
  }

  unSelectAll() {
    if (this.tableModel) {
      const m = this.tableModel.getBodyModel() as AreaModelObjectyArray<ThemeRowIf>;
      const rows = m.getAllRows();
      for (const row of rows) {
        row.selected = false;
      }
      if (this.tableApi) {
        this.tableApi.repaint();
      }
      this.selectedCount = 0;
      this.cdr.detectChanges();
    }
  }

  exportCss() {
    if (this.tableModel) {
      const m = this.tableModel.getBodyModel() as AreaModelObjectyArray<ThemeRowIf>;
      const rows = m.getAllRows();
      const buf: string[] = [`.custom-theme {`];

      for (const row of rows) {
        const key = row.id;
        const val = row.value;
        buf.push(`  ${key}: ${val};`);
      }
      buf.push("}");

      this.dialog.open(ExportDialogComponent, {
        ...ExportDialogComponent.DLG_OPTIONS,
        data: { text: buf.join("\n") }
      });
    }
  }

  protected setCssString(css: string) {
    this.cssString = css;
    if (this.cssString.includes("oklch")) {
      this.url = "https://oklch.com/#" + this.okLch.l + "," + this.okLch.c + "," + this.okLch.h + "," + this.okLch.a;
    } else if (this.cssString.includes("#")) {
      this.url = "https://colorpicker.me/#" + this.cssString.split("#")[1];
    } else {
      this.url = "";
    }
    this.cdr.detectChanges();
    this.syncCssVars();
  }

  protected filterFn(t: ThemeRowIf, _index: number, _array: ThemeRowIf[]) {
    return this.filterService.filterPredict<ThemeRowIf>(t, this.filterText, t => t.id);
  }

  protected syncCssVars() {
    if (this.tableModel) {
      const m = this.tableModel.getBodyModel() as AreaModelObjectyArray<ThemeRowIf>;
      const selectedRows = m.getAllRows().filter(r => r.selected);
      selectedRows.forEach(r => {
        r.value = this.cssString;
        if (this.bigScreen) {
          this.guiTable?.style.setProperty(r.id, this.cssString);
        }
      });
      if (this.bigScreen) {
        this.tableApi?.repaint();
      }

      this.syncCssService.messageBroadcast(m.getAllRows().map(r => [r.id, r.value]));
    }
  }

  protected syncAllCssVarsToPickerTable() {
    if (this.tableModel) {
      const m = this.tableModel.getBodyModel() as AreaModelObjectyArray<ThemeRowIf>;
      if (this.bigScreen) {
        m.getAllRows().forEach(r => {
          this.guiTable?.style.setProperty(r.id, r.value);
        });
        this.tableApi?.repaint();
      }
      this.syncCssService.messageBroadcast(m.getAllRows().map(r => [r.id, r.value]));
    }
  }

  private cssVarString2KeyValueArray(css: string) {
    return css
      .replace(/;/g, "")
      .split("\n")
      .map(r => r.trim())
      .filter(r => r.includes("--ge-table"))
      .map(r => r.split(": ").map(s => s.trim()));
  }

  onCheckboxChanged(evt: any[]) {
    if (this.tableModel) {
      const m = this.tableModel.getBodyModel() as AreaModelObjectyArray<ThemeRowIf>;
      this.selectedCount = m.getAllRows().filter(r => r.selected).length;
      this.cdr.detectChanges();
    }
  }
}
