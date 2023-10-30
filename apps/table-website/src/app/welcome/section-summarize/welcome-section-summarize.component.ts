import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "[appSectionSummarize]",
  templateUrl: "./welcome-section-summarize.component.html",
  styleUrls: ["../feature-box.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class WelcomeSectionSummarizeComponent {
}
