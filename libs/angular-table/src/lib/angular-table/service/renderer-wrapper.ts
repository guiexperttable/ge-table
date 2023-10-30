import {AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType} from "@guiexpert/table";
import {
  ApplicationRef,
  ChangeDetectorRef,
  createComponent,
  EnvironmentInjector,
  EventEmitter,
  NgZone,
  Type
} from "@angular/core";
import {ComponentRendererIf} from "../component-renderer.if";
import {Subject, takeUntil} from "rxjs";
import {Observable} from "rxjs/internal/Observable";


export class RendererWrapper<T extends ComponentRendererIf<T>>
  implements CellRendererIf {

  public readonly event$ = new EventEmitter<any>();
  private readonly closed$ = new Subject<number>();

  constructor(
    private componentType: Type<ComponentRendererIf<T>>,
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector,
    private cdr: ChangeDetectorRef,
    private readonly zone: NgZone
  ) {
  }

  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    cellValue: any,
    domService: DomServiceIf): RendererCleanupFnType | undefined {

    const componentRef = createComponent(this.componentType, {
      environmentInjector: this.injector
    });
    componentRef.instance.setData(
      rowIndex,
      columnIndex,
      areaIdent,
      areaModel,
      cellValue);


    const emmiterNames = Object.keys(componentRef.instance)
      .filter(key => {
        // @ts-ignore
        const t = componentRef.instance[key];
        return t['subscribe']
      });

    // @ts-ignore
    const observables: Observable[] = (emmiterNames.map(key => (componentRef.instance[key] as Observable)));
    observables.forEach(obs => obs
      .pipe(
        takeUntil(this.closed$)
      )
      .subscribe((event: any) => {
        console.info('RendererWrapper event >', event); // TODO hmm?
        this.event$.next(event);
      })
    );

    cellDiv.appendChild(componentRef.location.nativeElement);

    this.appRef.attachView(componentRef.hostView);

    this.zone.run(() => {
      this.cdr.detectChanges();
    });

    return () => {
      // clean up:
      this.appRef.detachView(componentRef.hostView);
      this.closed$.next(Date.now());
    };
  }


}
