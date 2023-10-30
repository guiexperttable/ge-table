import * as i0 from '@angular/core';
import { Injectable, Component, ViewEncapsulation, ChangeDetectionStrategy, Output, Input, EventEmitter, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime, takeWhile, takeUntil } from 'rxjs';
import { TableOptions, TableScope } from '@guiexpert/table';

class DomService {
    renderer;
    constructor(renderer) {
        this.renderer = renderer;
    }
    setStyle(el, style, value) {
        this.renderer.setStyle(el, style, value);
        return el;
    }
    ;
    appendText(parent, text) {
        const div = this.renderer.createText(text);
        this.renderer.appendChild(parent, div);
        return div;
    }
    addClass(div, clazz) {
        if (clazz.includes(' ')) {
            clazz.split(' ').forEach(c => this.renderer.addClass(div, c));
        }
        else {
            this.renderer.addClass(div, clazz);
        }
        return div;
    }
    appendChild(parent, child) {
        this.renderer.appendChild(parent, child);
    }
    createElement(name) {
        return this.renderer.createElement(name);
    }
    createText(text) {
        return this.renderer.createText(text);
    }
    setAttribute(ele, key, value) {
        this.renderer.setAttribute(ele, key, value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: DomService, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: DomService, providedIn: "root" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: DomService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; } });

class TableComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TableComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: DomService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.8", type: TableComponent, isStandalone: true, selector: "guiexpert-table", inputs: { tableModel: "tableModel", tableOptions: "tableOptions", debounceMouseClickDelay: "debounceMouseClickDelay" }, outputs: { tableReady: "tableReady", mouseMoved: "mouseMoved", mouseDragging: "mouseDragging", mouseDraggingEnded: "mouseDraggingEnded", contextmenu: "contextmenu", mouseClicked: "mouseClicked", modelChanged: "modelChanged", checkboxChanged: "checkboxChanged" }, providers: [DomService], ngImport: i0, template: "", isInline: true, styles: ["@import\"apps/table-style/src/styles.scss\";\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: "guiexpert-table", standalone: true, imports: [CommonModule], providers: [DomService], template: "", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["@import\"apps/table-style/src/styles.scss\";\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: DomService }]; }, propDecorators: { tableReady: [{
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

class RendererWrapper {
    componentType;
    appRef;
    injector;
    cdr;
    zone;
    event$ = new EventEmitter();
    closed$ = new Subject();
    constructor(componentType, appRef, injector, cdr, zone) {
        this.componentType = componentType;
        this.appRef = appRef;
        this.injector = injector;
        this.cdr = cdr;
        this.zone = zone;
    }
    render(cellDiv, rowIndex, columnIndex, areaIdent, areaModel, cellValue, domService) {
        const componentRef = createComponent(this.componentType, {
            environmentInjector: this.injector
        });
        componentRef.instance.setData(rowIndex, columnIndex, areaIdent, areaModel, cellValue);
        const emmiterNames = Object.keys(componentRef.instance)
            .filter(key => {
            // @ts-ignore
            const t = componentRef.instance[key];
            return t['subscribe'];
        });
        // @ts-ignore
        const observables = (emmiterNames.map(key => componentRef.instance[key]));
        observables.forEach(obs => obs
            .pipe(takeUntil(this.closed$))
            .subscribe((event) => {
            console.info('RendererWrapper event >', event); // TODO hmm?
            this.event$.next(event);
        }));
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

class RenderWrapperFactory {
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

/**
 * Generated bundle index. Do not edit.
 */

export { DomService, RenderWrapperFactory, RendererWrapper, TableComponent };
//# sourceMappingURL=guiexpert-angular-table.mjs.map
