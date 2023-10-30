import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewEncapsulation
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { debounceTime, Subject, takeWhile } from "rxjs";
import {
  EventListenerIf,
  GeModelChangeEvent,
  GeMouseEvent,
  TableApi,
  TableModelIf,
  TableOptions,
  TableOptionsIf,
  TableScope
} from "@guiexpert/table";
import { DomService } from "./service/dom-service";


@Component({
  selector: "guiexpert-table",
  standalone: true,
  imports: [CommonModule],
  providers: [DomService],
  template: "",
  styleUrls: [
    "./table.component.css"
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, OnDestroy, EventListenerIf {

  @Output()
  tableReady = new Subject<TableApi>();

  @Output()
  mouseMoved: Subject<GeMouseEvent> = new Subject<GeMouseEvent>();

  @Output()
  mouseDragging: Subject<GeMouseEvent> = new Subject<GeMouseEvent>();

  @Output()
  mouseDraggingEnded: Subject<GeMouseEvent> = new Subject<GeMouseEvent>();

  @Output()
  contextmenu: Subject<GeMouseEvent> = new Subject<GeMouseEvent>();

  @Output()
  mouseClicked: Subject<GeMouseEvent> = new Subject<GeMouseEvent>();

  @Output()
  modelChanged: Subject<GeModelChangeEvent> = new Subject<GeModelChangeEvent>();

  @Output()
  checkboxChanged: Subject<any[]> = new Subject<any[]>();

  @Input()
  tableModel?: TableModelIf;

  @Input()
  tableOptions: TableOptionsIf = new TableOptions();

  @Input()
  debounceMouseClickDelay: number = 150;

  private debounceMouseClick: Subject<GeMouseEvent> = new Subject<GeMouseEvent>();

  private tableScope?: TableScope;
  private alive = true;


  constructor(
    private readonly renderer: Renderer2,
    private readonly elementRef: ElementRef,
    private readonly zone: NgZone,
    private readonly domService: DomService
  ) {
  }


  onContextmenu(evt: GeMouseEvent): void {
    this.contextmenu.next(evt);
  }

  onMouseMoved(evt: GeMouseEvent): void {
    this.mouseMoved.next(evt);
  }

  // will be called by table-scope:
  onMouseClicked(evt: GeMouseEvent): void {
    this.debounceMouseClick.next(evt);
  }

  onCheckboxChanged(arr: any[]): void {
    this.checkboxChanged.next(arr);
  }

  onModelChanged(evt: GeModelChangeEvent): void {
    this.modelChanged.next(evt);
  }

  ngOnInit(): void {
    this.initModel();
    this.debounceMouseClick
      .pipe(
        debounceTime(this.debounceMouseClickDelay),
        takeWhile(() => this.alive)
      )
      .subscribe((value) => this.mouseClicked.next(value));
  }

  ngOnDestroy(): void {
    this.alive = false;
  }


  onMouseDragging(evt: GeMouseEvent): void {
    this.mouseDragging.next(evt);
  }

  onMouseDraggingEnd(evt: GeMouseEvent): void {
    this.mouseDraggingEnded.next(evt);
  }


  private initModel() {
    this.zone.runOutsideAngular(this.init.bind(this));
  }

  private init() {
    if (this.tableModel) {
      this.tableScope = new TableScope(
        this.elementRef.nativeElement, this.tableModel, this.domService, this.tableOptions, this
      );
      this.tableScope.firstInit();
      this.tableReady.next(this.tableScope.getApi());
    }
  }


}
