import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, Output, Renderer2, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { debounceTime, Subject, takeWhile } from "rxjs";
import { TableOptions, TableScope } from "@guiexpert/table";
import { DomService } from "./service/dom-service";
import * as i0 from "@angular/core";
import * as i1 from "./service/dom-service";
export class TableComponent {
    renderer;
    elementRef;
    zone;
    domService;
    tableReady = new Subject();
    mouseMoved = new Subject();
    mouseDragging = new Subject();
    mouseDraggingEnded = new Subject();
    contextmenu = new Subject();
    mouseClicked = new Subject();
    modelChanged = new Subject();
    checkboxChanged = new Subject();
    tableModel;
    tableOptions = new TableOptions();
    debounceMouseClickDelay = 150;
    debounceMouseClick = new Subject();
    tableScope;
    alive = true;
    constructor(renderer, elementRef, zone, domService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.zone = zone;
        this.domService = domService;
    }
    onContextmenu(evt) {
        this.contextmenu.next(evt);
    }
    onMouseMoved(evt) {
        this.mouseMoved.next(evt);
    }
    // will be called by table-scope:
    onMouseClicked(evt) {
        this.debounceMouseClick.next(evt);
    }
    onCheckboxChanged(arr) {
        this.checkboxChanged.next(arr);
    }
    onModelChanged(evt) {
        this.modelChanged.next(evt);
    }
    ngOnInit() {
        this.initModel();
        this.debounceMouseClick
            .pipe(debounceTime(this.debounceMouseClickDelay), takeWhile(() => this.alive))
            .subscribe((value) => this.mouseClicked.next(value));
    }
    ngOnDestroy() {
        this.alive = false;
    }
    onMouseDragging(evt) {
        this.mouseDragging.next(evt);
    }
    onMouseDraggingEnd(evt) {
        this.mouseDraggingEnded.next(evt);
    }
    initModel() {
        this.zone.runOutsideAngular(this.init.bind(this));
    }
    init() {
        if (this.tableModel) {
            this.tableScope = new TableScope(this.elementRef.nativeElement, this.tableModel, this.domService, this.tableOptions, this);
            this.tableScope.firstInit();
            this.tableReady.next(this.tableScope.getApi());
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TableComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.DomService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.8", type: TableComponent, isStandalone: true, selector: "guiexpert-table", inputs: { tableModel: "tableModel", tableOptions: "tableOptions", debounceMouseClickDelay: "debounceMouseClickDelay" }, outputs: { tableReady: "tableReady", mouseMoved: "mouseMoved", mouseDragging: "mouseDragging", mouseDraggingEnded: "mouseDraggingEnded", contextmenu: "contextmenu", mouseClicked: "mouseClicked", modelChanged: "modelChanged", checkboxChanged: "checkboxChanged" }, providers: [DomService], ngImport: i0, template: "", isInline: true, styles: ["@import\"apps/table-style/src/styles.scss\";\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: "guiexpert-table", standalone: true, imports: [CommonModule], providers: [DomService], template: "", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["@import\"apps/table-style/src/styles.scss\";\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.DomService }]; }, propDecorators: { tableReady: [{
                type: Output
            }], mouseMoved: [{
                type: Output
            }], mouseDragging: [{
                type: Output
            }], mouseDraggingEnded: [{
                type: Output
            }], contextmenu: [{
                type: Output
            }], mouseClicked: [{
                type: Output
            }], modelChanged: [{
                type: Output
            }], checkboxChanged: [{
                type: Output
            }], tableModel: [{
                type: Input
            }], tableOptions: [{
                type: Input
            }], debounceMouseClickDelay: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hbmd1bGFyLXRhYmxlL3NyYy9saWIvYW5ndWxhci10YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLEVBTUwsWUFBWSxFQUVaLFVBQVUsRUFDWCxNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBZW5ELE1BQU0sT0FBTyxjQUFjO0lBMENOO0lBQ0E7SUFDQTtJQUNBO0lBMUNuQixVQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztJQUdyQyxVQUFVLEdBQTBCLElBQUksT0FBTyxFQUFnQixDQUFDO0lBR2hFLGFBQWEsR0FBMEIsSUFBSSxPQUFPLEVBQWdCLENBQUM7SUFHbkUsa0JBQWtCLEdBQTBCLElBQUksT0FBTyxFQUFnQixDQUFDO0lBR3hFLFdBQVcsR0FBMEIsSUFBSSxPQUFPLEVBQWdCLENBQUM7SUFHakUsWUFBWSxHQUEwQixJQUFJLE9BQU8sRUFBZ0IsQ0FBQztJQUdsRSxZQUFZLEdBQWdDLElBQUksT0FBTyxFQUFzQixDQUFDO0lBRzlFLGVBQWUsR0FBbUIsSUFBSSxPQUFPLEVBQVMsQ0FBQztJQUd2RCxVQUFVLENBQWdCO0lBRzFCLFlBQVksR0FBbUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUdsRCx1QkFBdUIsR0FBVyxHQUFHLENBQUM7SUFFOUIsa0JBQWtCLEdBQTBCLElBQUksT0FBTyxFQUFnQixDQUFDO0lBRXhFLFVBQVUsQ0FBYztJQUN4QixLQUFLLEdBQUcsSUFBSSxDQUFDO0lBR3JCLFlBQ21CLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLElBQVksRUFDWixVQUFzQjtRQUh0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGVBQVUsR0FBVixVQUFVLENBQVk7SUFFekMsQ0FBQztJQUdELGFBQWEsQ0FBQyxHQUFpQjtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQWlCO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQ0FBaUM7SUFDakMsY0FBYyxDQUFDLEdBQWlCO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQVU7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGNBQWMsQ0FBQyxHQUF1QjtRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLElBQUksQ0FDSCxZQUFZLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQzFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQzVCO2FBQ0EsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUdELGVBQWUsQ0FBQyxHQUFpQjtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0JBQWtCLENBQUMsR0FBaUI7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR08sU0FBUztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8sSUFBSTtRQUNWLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQ3pGLENBQUM7WUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7dUdBM0dVLGNBQWM7MkZBQWQsY0FBYyw2YkFSZCxDQUFDLFVBQVUsQ0FBQywwQkFDYixFQUFFLHVIQUZGLFlBQVk7OzJGQVNYLGNBQWM7a0JBWjFCLFNBQVM7K0JBQ0UsaUJBQWlCLGNBQ2YsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDLGFBQ1osQ0FBQyxVQUFVLENBQUMsWUFDYixFQUFFLGlCQUlHLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07dUtBSy9DLFVBQVU7c0JBRFQsTUFBTTtnQkFJUCxVQUFVO3NCQURULE1BQU07Z0JBSVAsYUFBYTtzQkFEWixNQUFNO2dCQUlQLGtCQUFrQjtzQkFEakIsTUFBTTtnQkFJUCxXQUFXO3NCQURWLE1BQU07Z0JBSVAsWUFBWTtzQkFEWCxNQUFNO2dCQUlQLFlBQVk7c0JBRFgsTUFBTTtnQkFJUCxlQUFlO3NCQURkLE1BQU07Z0JBSVAsVUFBVTtzQkFEVCxLQUFLO2dCQUlOLFlBQVk7c0JBRFgsS0FBSztnQkFJTix1QkFBdUI7c0JBRHRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIFN1YmplY3QsIHRha2VXaGlsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1xuICBFdmVudExpc3RlbmVySWYsXG4gIEdlTW9kZWxDaGFuZ2VFdmVudCxcbiAgR2VNb3VzZUV2ZW50LFxuICBUYWJsZUFwaSxcbiAgVGFibGVNb2RlbElmLFxuICBUYWJsZU9wdGlvbnMsXG4gIFRhYmxlT3B0aW9uc0lmLFxuICBUYWJsZVNjb3BlXG59IGZyb20gXCJAZ3VpZXhwZXJ0L3RhYmxlXCI7XG5pbXBvcnQgeyBEb21TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9kb20tc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJndWlleHBlcnQtdGFibGVcIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW0RvbVNlcnZpY2VdLFxuICB0ZW1wbGF0ZTogXCJcIixcbiAgc3R5bGVVcmxzOiBbXG4gICAgXCIuL3RhYmxlLmNvbXBvbmVudC5jc3NcIlxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBFdmVudExpc3RlbmVySWYge1xuXG4gIEBPdXRwdXQoKVxuICB0YWJsZVJlYWR5ID0gbmV3IFN1YmplY3Q8VGFibGVBcGk+KCk7XG5cbiAgQE91dHB1dCgpXG4gIG1vdXNlTW92ZWQ6IFN1YmplY3Q8R2VNb3VzZUV2ZW50PiA9IG5ldyBTdWJqZWN0PEdlTW91c2VFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgbW91c2VEcmFnZ2luZzogU3ViamVjdDxHZU1vdXNlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8R2VNb3VzZUV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBtb3VzZURyYWdnaW5nRW5kZWQ6IFN1YmplY3Q8R2VNb3VzZUV2ZW50PiA9IG5ldyBTdWJqZWN0PEdlTW91c2VFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgY29udGV4dG1lbnU6IFN1YmplY3Q8R2VNb3VzZUV2ZW50PiA9IG5ldyBTdWJqZWN0PEdlTW91c2VFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgbW91c2VDbGlja2VkOiBTdWJqZWN0PEdlTW91c2VFdmVudD4gPSBuZXcgU3ViamVjdDxHZU1vdXNlRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIG1vZGVsQ2hhbmdlZDogU3ViamVjdDxHZU1vZGVsQ2hhbmdlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8R2VNb2RlbENoYW5nZUV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBjaGVja2JveENoYW5nZWQ6IFN1YmplY3Q8YW55W10+ID0gbmV3IFN1YmplY3Q8YW55W10+KCk7XG5cbiAgQElucHV0KClcbiAgdGFibGVNb2RlbD86IFRhYmxlTW9kZWxJZjtcblxuICBASW5wdXQoKVxuICB0YWJsZU9wdGlvbnM6IFRhYmxlT3B0aW9uc0lmID0gbmV3IFRhYmxlT3B0aW9ucygpO1xuXG4gIEBJbnB1dCgpXG4gIGRlYm91bmNlTW91c2VDbGlja0RlbGF5OiBudW1iZXIgPSAxNTA7XG5cbiAgcHJpdmF0ZSBkZWJvdW5jZU1vdXNlQ2xpY2s6IFN1YmplY3Q8R2VNb3VzZUV2ZW50PiA9IG5ldyBTdWJqZWN0PEdlTW91c2VFdmVudD4oKTtcblxuICBwcml2YXRlIHRhYmxlU2NvcGU/OiBUYWJsZVNjb3BlO1xuICBwcml2YXRlIGFsaXZlID0gdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb21TZXJ2aWNlOiBEb21TZXJ2aWNlXG4gICkge1xuICB9XG5cblxuICBvbkNvbnRleHRtZW51KGV2dDogR2VNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5jb250ZXh0bWVudS5uZXh0KGV2dCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZWQoZXZ0OiBHZU1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm1vdXNlTW92ZWQubmV4dChldnQpO1xuICB9XG5cbiAgLy8gd2lsbCBiZSBjYWxsZWQgYnkgdGFibGUtc2NvcGU6XG4gIG9uTW91c2VDbGlja2VkKGV2dDogR2VNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5kZWJvdW5jZU1vdXNlQ2xpY2submV4dChldnQpO1xuICB9XG5cbiAgb25DaGVja2JveENoYW5nZWQoYXJyOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tib3hDaGFuZ2VkLm5leHQoYXJyKTtcbiAgfVxuXG4gIG9uTW9kZWxDaGFuZ2VkKGV2dDogR2VNb2RlbENoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbENoYW5nZWQubmV4dChldnQpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0TW9kZWwoKTtcbiAgICB0aGlzLmRlYm91bmNlTW91c2VDbGlja1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlTW91c2VDbGlja0RlbGF5KSxcbiAgICAgICAgdGFrZVdoaWxlKCgpID0+IHRoaXMuYWxpdmUpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT4gdGhpcy5tb3VzZUNsaWNrZWQubmV4dCh2YWx1ZSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xuICB9XG5cblxuICBvbk1vdXNlRHJhZ2dpbmcoZXZ0OiBHZU1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm1vdXNlRHJhZ2dpbmcubmV4dChldnQpO1xuICB9XG5cbiAgb25Nb3VzZURyYWdnaW5nRW5kKGV2dDogR2VNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5tb3VzZURyYWdnaW5nRW5kZWQubmV4dChldnQpO1xuICB9XG5cblxuICBwcml2YXRlIGluaXRNb2RlbCgpIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIodGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICh0aGlzLnRhYmxlTW9kZWwpIHtcbiAgICAgIHRoaXMudGFibGVTY29wZSA9IG5ldyBUYWJsZVNjb3BlKFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy50YWJsZU1vZGVsLCB0aGlzLmRvbVNlcnZpY2UsIHRoaXMudGFibGVPcHRpb25zLCB0aGlzXG4gICAgICApO1xuICAgICAgdGhpcy50YWJsZVNjb3BlLmZpcnN0SW5pdCgpO1xuICAgICAgdGhpcy50YWJsZVJlYWR5Lm5leHQodGhpcy50YWJsZVNjb3BlLmdldEFwaSgpKTtcbiAgICB9XG4gIH1cblxuXG59XG4iXX0=