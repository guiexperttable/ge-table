import { ApplicationRef, EnvironmentInjector, Injectable, NgZone } from "@angular/core";
import { RendererWrapper } from "./renderer-wrapper";
import * as i0 from "@angular/core";
export class RenderWrapperFactory {
    appRef;
    injector;
    zone;
    constructor(appRef, injector, zone) {
        this.appRef = appRef;
        this.injector = injector;
        this.zone = zone;
    }
    create(componentType, cdr) {
        return new RendererWrapper(componentType, this.appRef, this.injector, cdr, this.zone);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: RenderWrapperFactory, deps: [{ token: i0.ApplicationRef }, { token: i0.EnvironmentInjector }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: RenderWrapperFactory, providedIn: "root" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: RenderWrapperFactory, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], ctorParameters: function () { return [{ type: i0.ApplicationRef }, { type: i0.EnvironmentInjector }, { type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXdyYXBwZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYW5ndWxhci10YWJsZS9zcmMvbGliL2FuZ3VsYXItdGFibGUvc2VydmljZS9yZW5kZXItd3JhcHBlci1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQXFCLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQU8sTUFBTSxlQUFlLENBQUM7QUFFL0csT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDOztBQUtuRCxNQUFNLE9BQU8sb0JBQW9CO0lBR1o7SUFDQTtJQUNBO0lBSG5CLFlBQ21CLE1BQXNCLEVBQ3RCLFFBQTZCLEVBQzdCLElBQVk7UUFGWixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUM3QixTQUFJLEdBQUosSUFBSSxDQUFRO0lBRS9CLENBQUM7SUFFRCxNQUFNLENBQ0osYUFBMkMsRUFDM0MsR0FBc0I7UUFFdEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEYsQ0FBQzt1R0FkVSxvQkFBb0I7MkdBQXBCLG9CQUFvQixjQUZuQixNQUFNOzsyRkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBsaWNhdGlvblJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVudmlyb25tZW50SW5qZWN0b3IsIEluamVjdGFibGUsIE5nWm9uZSwgVHlwZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q29tcG9uZW50UmVuZGVyZXJJZn0gZnJvbSBcIi4uL2NvbXBvbmVudC1yZW5kZXJlci5pZlwiO1xuaW1wb3J0IHtSZW5kZXJlcldyYXBwZXJ9IGZyb20gXCIuL3JlbmRlcmVyLXdyYXBwZXJcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBSZW5kZXJXcmFwcGVyRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEVudmlyb25tZW50SW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByZWFkb25seSB6b25lOiBOZ1pvbmVcbiAgKSB7XG4gIH1cblxuICBjcmVhdGU8VD4oXG4gICAgY29tcG9uZW50VHlwZTogVHlwZTxDb21wb25lbnRSZW5kZXJlcklmPFQ+PixcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHJldHVybiBuZXcgUmVuZGVyZXJXcmFwcGVyKGNvbXBvbmVudFR5cGUsIHRoaXMuYXBwUmVmLCB0aGlzLmluamVjdG9yLCBjZHIsIHRoaXMuem9uZSk7XG4gIH1cblxufVxuIl19