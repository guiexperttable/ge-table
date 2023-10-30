import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";

@Component({
  selector: "app-condition-of-use",
  templateUrl: "condition-of-use.component.html",
  styleUrls: ["condition-of-use.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionOfUseComponent implements AfterViewInit {

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}
