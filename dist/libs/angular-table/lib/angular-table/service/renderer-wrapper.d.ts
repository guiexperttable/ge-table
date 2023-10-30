import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";
import { ApplicationRef, ChangeDetectorRef, EnvironmentInjector, EventEmitter, NgZone, Type } from "@angular/core";
import { ComponentRendererIf } from "../component-renderer.if";
export declare class RendererWrapper<T extends ComponentRendererIf<T>> implements CellRendererIf {
    private componentType;
    private appRef;
    private injector;
    private cdr;
    private readonly zone;
    readonly event$: EventEmitter<any>;
    private readonly closed$;
    constructor(componentType: Type<ComponentRendererIf<T>>, appRef: ApplicationRef, injector: EnvironmentInjector, cdr: ChangeDetectorRef, zone: NgZone);
    render(cellDiv: HTMLDivElement, rowIndex: number, columnIndex: number, areaIdent: AreaIdent, areaModel: AreaModelIf, cellValue: any, domService: DomServiceIf): RendererCleanupFnType | undefined;
}
