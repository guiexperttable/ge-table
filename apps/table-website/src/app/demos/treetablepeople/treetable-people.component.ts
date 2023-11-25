import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit
} from "@angular/core";
import {GeModelChangeEvent, TableApi, TableModelIf, TableOptionsIf, TreeRow} from "@guiexpert/table";
import {PersonIf} from "./data/person.if";
import {debounceTime, takeWhile} from "rxjs";
import {SyncCssService} from "../../common/syncdata/sync-css.service";
import {createTreePeopleModelAndOptions} from "@guiexpert/demo-table-models";


@Component({
  selector: "demo-tree-people",
  templateUrl: "./treetable-people.component.html",
  styleUrls: ["./treetable-people.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreetablePeopleComponent implements OnInit, OnDestroy {


  tableOptions: TableOptionsIf;
  tableModel: TableModelIf;
  filterText = "";

  private tableApi?: TableApi;
  private filter$ = new EventEmitter<number>();
  private alive = true;

  constructor(
    private readonly elementRef: ElementRef
  ) {
    const mo = createTreePeopleModelAndOptions(true);
    this.tableModel = mo.tableModel;
    this.tableOptions = mo.tableOptions;
    this.tableOptions.externalFilterFunction = this.filterFn.bind(this);
  }


  ngOnInit(): void {
    this.filter$
      .pipe(
        takeWhile(() => this.alive),
        debounceTime(200)
      )
      .subscribe(() => {
        this.tableApi?.externalFilterChanged();
      });

    // Color picker sync:
    const m = location.pathname.match(/\/demo\/(.*?)\/run/);
    if (m && m[1]) {
      new SyncCssService(m[1]).sync(this.elementRef.nativeElement, () => this.tableApi, () => this.alive);
    }
  }


  ngOnDestroy(): void {
    this.alive = false;
  }

  onKeyup() {
    this.filter$.next(Date.now());
  }


  onTableReady($event: TableApi) {
    this.tableApi = $event;
  }


  onModelChanged(evt: GeModelChangeEvent) {
    if (evt.cells?.length) {
      for (let i = 0; i < evt.cells.length; i++) {
        const cell = evt.cells[i];
        // TODO update cell?
      }
    }
  }


  private filterFn(value: TreeRow<PersonIf>, _index: number, _array: PersonIf[]) {
    return !this.filterText || value.data.address.city.includes(this.filterText);
  }

}

