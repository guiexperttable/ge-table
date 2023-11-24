import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit
} from "@angular/core";
import {TableApi, TableModelIf, TableOptionsIf} from "@guiexpert/table";

import {debounceTime, takeWhile} from "rxjs";
import {createOrderModelAndOptions, OrderIf} from "@guiexpert/demo-table-models";


@Component({
  selector: "order-top-100-demo",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent implements OnInit, OnDestroy {

  @Input()
  small = false;

  @Input()
  set filter(value: string) {
    this.filterText = value;
    this.tableApi?.externalFilterChanged();
  }


  tableModel: TableModelIf;
  tableOptions: TableOptionsIf;

  filterText = "";

  private tableApi?: TableApi;
  private filter$ = new EventEmitter<number>();
  private alive = true;

  constructor(
    private readonly elementRef: ElementRef
  ) {
    const omao = createOrderModelAndOptions();
    this.tableModel = omao.tableModel;
    this.tableOptions = {
      ...omao.tableOptions,
      externalFilterFunction: this.filterFn.bind(this),
    }
  }

  ngOnInit(): void {
    this.filter$
      .pipe(
        takeWhile(() => this.alive),
        debounceTime(400)
      )
      .subscribe(() => {
        this.tableApi?.externalFilterChanged();
      });
  }


  ngOnDestroy(): void {
    this.alive = false;
  }

  onKeyup() {
    this.filter$.next(Date.now());
  }


  onTableReady($event: TableApi) {
    this.tableApi = $event;
    if (this.filterText) {
      this.tableApi?.externalFilterChanged();
    }
  }


  private filterFn(coin: OrderIf, _index: number, _array: OrderIf[]) {
    if (!this.filterText) {
      return true;
    }
    const ls = this.filterText.toLowerCase();
    return JSON.stringify(coin).toLowerCase().includes(ls);
  }

}

