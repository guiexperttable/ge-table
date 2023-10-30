import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input } from "@angular/core";

declare var Prism: any;

@Component({
  selector: "source-code",
  templateUrl: "./source-code.component.html",
  styleUrls: ["./source-code.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceCodeComponent implements AfterViewInit {

  @Input() text = "";
  @Input() language = "language-typescript";

  constructor(
    private readonly elementRef: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    Prism.highlightAllUnder(this.elementRef.nativeElement);
  }
}
