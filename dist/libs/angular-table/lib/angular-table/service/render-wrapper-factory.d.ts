import { ApplicationRef, ChangeDetectorRef, EnvironmentInjector, NgZone, Type } from "@angular/core";
import { ComponentRendererIf } from "../component-renderer.if";
import { RendererWrapper } from "./renderer-wrapper";
import * as i0 from "@angular/core";
export declare class RenderWrapperFactory {
    private readonly appRef;
    private readonly injector;
    private readonly zone;
    constructor(appRef: ApplicationRef, injector: EnvironmentInjector, zone: NgZone);
    create<T>(componentType: Type<ComponentRendererIf<T>>, cdr: ChangeDetectorRef): RendererWrapper<ComponentRendererIf<T>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RenderWrapperFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RenderWrapperFactory>;
}
