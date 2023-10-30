import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";

@Component({
  selector: "app-privacy-notice",
  templateUrl: "privacy-notice.component.html",
  styleUrls: ["privacy-notice.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyNoticeDatenschutzComponent implements AfterViewInit {

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}
