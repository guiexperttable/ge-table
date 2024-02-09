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
  EventListenerIf, FocusModelIf,
  GeModelChangeEvent,
  GeMouseEvent, LicenseManager, SelectionModelIf,
  TableApi,
  TableModelIf,
  TableOptions,
  TableOptionsIf,
  TableScope
} from '@guiexpert/table';
import { DomService } from "./service/dom-service";


/**
 * TableComponent is a reusable GUI component that displays tabular data.
 * It provides various event outputs for user interactions such as mouse movement, dragging, clicking, etc.
 * It requires a TableModelIf instance to specify the data and TableOptionsIf instance to configure the appearance and behavior.
 *
 * @example
 * <guiexpert-table
 *   [licenseKey]="licenseKey"
 *   [tableModel]="tableModel"
 *   [tableOptions]="tableOptions"
 *   [debounceMouseClickDelay]="150"
 *   (tableReady)="handleTableReady($event)"
 *   (mouseMoved)="handleMouseMoved($event)"
 *   (mouseDragging)="handleMouseDragging($event)"
 *   (mouseDraggingEnded)="handleMouseDraggingEnded($event)"
 *   (contextmenu)="handleContextMenu($event)"
 *   (mouseClicked)="handleMouseClicked($event)"
 *   (modelChanged)="handleModelChanged($event)"
 *   (checkboxChanged)="handleCheckboxChanged($event)">
 * </guiexpert-table>
 *
 * @requires CommonModule from '@angular/common'
 * @requires DomService
 *
 * @remarks
 * This component is designed to be standalone and should not have any parent components wrapping it.
 * It uses OnPush change detection strategy and has ViewEncapsulation.None encapsulation.
 *
 * @publicApi
 */
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



  /**
   * Set the license key for the LicenseManager.
   *
   * @param {string} key - The license key to set.
   * @returns {void}
   */
  @Input()
  set licenseKey(key: string) {
    LicenseManager.getInstance().setLicenseKey(key);
  }

  /**
   * Represents a Subject variable used to notify subscribers when a table is ready.
   *
   * @type {Subject<TableApi>}
   */
  @Output()
  tableReady = new Subject<TableApi>();

  /**
   * Represents the event emitter for the mouse moved event.
   *
   * @type {Subject<GeMouseEvent>}
   * @memberOf MyApplication
   */
  @Output()
  mouseMoved: Subject<GeMouseEvent> = new Subject<GeMouseEvent>();

  /**
   * Represents a variable for tracking mouse dragging events.
   *
   * @type {Subject<GeMouseEvent>}
   */
  @Output()
  mouseDragging: Subject<GeMouseEvent> = new Subject<GeMouseEvent>();

  /**
   * An instance of `Subject` that represents the event when mouse dragging has ended.
   *
   * @type {Subject<GeMouseEvent>}
   * @memberof [Your Object/Class/Module]
   */
  @Output()
  mouseDraggingEnded: Subject<GeMouseEvent> = new Subject<GeMouseEvent>();

  /**
   * Represents the context menu event subject.
   *
   * @name contextmenu
   * @type {Subject<GeMouseEvent>}
   *
   * @description
   * The `contextmenu` variable is an instance of the `Subject` class from the 'rxjs' library.
   * It is used for broadcasting context menu events of type `GeMouseEvent`.
   * Other parts of the code can subscribe to this subject to be notified when a context menu event occurs.
   * The subject allows multiple observers to receive the event simultaneously.
   */
  @Output()
  contextmenu: Subject<GeMouseEvent> = new Subject<GeMouseEvent>();

  /**
   * Represents a stream of mouse click events.
   *
   * @type {Subject<GeMouseEvent>}
   */
  @Output()
  mouseClicked: Subject<GeMouseEvent> = new Subject<GeMouseEvent>();

  /**
   * A variable representing an observable subject for model change events.
   *
   * @type {Subject<GeModelChangeEvent>}
   */
  @Output()
  modelChanged: Subject<GeModelChangeEvent> = new Subject<GeModelChangeEvent>();


  @Output()
  selectionChanged: Subject<SelectionModelIf> = new Subject<SelectionModelIf>();

  @Output()
  focusChanged: Subject<FocusModelIf> = new Subject<FocusModelIf>();

  /**
   * Represents a Subject that emits an array of any type when a checkbox is changed.
   *
   * @type {Subject<any[]>}
   */
  @Output()
  checkboxChanged: Subject<any[]> = new Subject<any[]>();

  /**
   * Represents a table model.
   *
   * @typedef {object} TableModel
   * @property {any[]} [data] - An array containing the data for the table rows.
   * @property {string[]} [headers] - An array containing the table column headers.
   * @property {function} [updateData] - A function that updates the data in the table.
   * @property {function} [updateHeaders] - A function that updates the column headers in the table.
   * @property {function} [getData] - A function that retrieves the current data in the table.
   * @property {function} [getHeaders] - A function that retrieves the column headers in the table.
   */
  @Input()
  tableModel?: TableModelIf;

  /**
   * Represents the options for configuring a table.
   *
   * @typedef {Object} TableOptions
   * @property {string} [option1] - Optional property to configure option1.
   * @property {number} [option2] - Optional property to configure option2.
   * @property {boolean} [option3] - Optional property to configure option3.
   * @property {any[]} [option4] - Optional property to configure option4.
   *
   * @example
   * const tableOptions: TableOptions = new TableOptions();
   * tableOptions.option1 = 'value1';
   * tableOptions.option2 = 5;
   * tableOptions.option3 = true;
   * tableOptions.option4 = [1, 2, 3];
   */
  @Input()
  tableOptions: TableOptionsIf = new TableOptions();

  /**
   * The debounceMouseClickDelay variable represents the delay in milliseconds for debouncing mouse clicks.
   *
   * @type {number}
   */
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


  onSelectionChanged(model: SelectionModelIf): void {
    console.info('onSelectionChanged in angular component.'); // TODO delete
    this.selectionChanged.next(model);
  }

  onFocusChanged(model: FocusModelIf): void {
    console.info('onFocusChanged in angular component.'); // TODO delete
    this.focusChanged.next(model);
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
