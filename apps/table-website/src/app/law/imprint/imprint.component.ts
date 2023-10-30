import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";

@Component({
  selector: "app-imprint",
  templateUrl: "imprint.component.html",
  styleUrls: ["imprint.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImprintComponent implements AfterViewInit {

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}

