import { AfterViewInit, Directive } from "@angular/core";

declare var Prism: any;

@Directive({
  selector: "[prismHighlightAll]"
})
export class PrismDirective implements AfterViewInit {
  ngAfterViewInit(): void {
    Prism.highlightAll();
  }

}
