import { Injectable, Renderer2 } from "@angular/core";
import * as i0 from "@angular/core";
export class DomService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FuZ3VsYXItdGFibGUvc3JjL2xpYi9hbmd1bGFyLXRhYmxlL3NlcnZpY2UvZG9tLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBT3BELE1BQU0sT0FBTyxVQUFVO0lBR1Y7SUFEWCxZQUNXLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFFOUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxFQUFPLEVBQUUsS0FBYSxFQUFFLEtBQVU7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFBQSxDQUFDO0lBR0YsVUFBVSxDQUFDLE1BQXNCLEVBQUUsSUFBWTtRQUM3QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBR0QsUUFBUSxDQUFDLEdBQW1CLEVBQUUsS0FBYTtRQUN6QyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUM5RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQW1CLEVBQUUsS0FBa0I7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxhQUFhLENBQUksSUFBWTtRQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBZ0IsRUFBRSxHQUFXLEVBQUUsS0FBYTtRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7dUdBM0NVLFVBQVU7MkdBQVYsVUFBVSxjQUZULE1BQU07OzJGQUVQLFVBQVU7a0JBSHRCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBSZW5kZXJlcjJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0RvbVNlcnZpY2VJZn0gZnJvbSBcIkBndWlleHBlcnQvdGFibGVcIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIERvbVNlcnZpY2UgaW1wbGVtZW50cyBEb21TZXJ2aWNlSWYge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICB9XG5cbiAgc2V0U3R5bGUoZWw6IGFueSwgc3R5bGU6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgc3R5bGUsIHZhbHVlKTtcbiAgICByZXR1cm4gZWw7XG4gIH07XG5cblxuICBhcHBlbmRUZXh0KHBhcmVudDogSFRNTERpdkVsZW1lbnQsIHRleHQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGV4dCk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnQsIGRpdik7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG5cbiAgYWRkQ2xhc3MoZGl2OiBIVE1MRGl2RWxlbWVudCwgY2xheno6IHN0cmluZykge1xuICAgIGlmIChjbGF6ei5pbmNsdWRlcygnICcpKSB7XG4gICAgICBjbGF6ei5zcGxpdCgnICcpLmZvckVhY2goYyA9PiB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGRpdiwgYykpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZGl2LCBjbGF6eik7XG4gICAgfVxuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBhcHBlbmRDaGlsZChwYXJlbnQ6IEhUTUxFbGVtZW50LCBjaGlsZDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudDxUPihuYW1lOiBzdHJpbmcpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICB9XG5cbiAgY3JlYXRlVGV4dCh0ZXh0OiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0ZXh0KTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShlbGU6IEhUTUxFbGVtZW50LCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZSwga2V5LCB2YWx1ZSk7XG4gIH1cblxuXG59XG4iXX0=