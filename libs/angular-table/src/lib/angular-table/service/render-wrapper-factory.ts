import {ApplicationRef, ChangeDetectorRef, EnvironmentInjector, Injectable, NgZone, Type} from "@angular/core";
import {ComponentRendererIf} from "../component-renderer.if";
import {RendererWrapper} from "./renderer-wrapper";

@Injectable({
  providedIn: "root"
})
export class RenderWrapperFactory {

  constructor(
    private readonly appRef: ApplicationRef,
    private readonly injector: EnvironmentInjector,
    private readonly zone: NgZone
  ) {
  }

  create<T>(
    componentType: Type<ComponentRendererIf<T>>,
    cdr: ChangeDetectorRef
  ) {
    return new RendererWrapper(componentType, this.appRef, this.injector, cdr, this.zone);
  }

}
