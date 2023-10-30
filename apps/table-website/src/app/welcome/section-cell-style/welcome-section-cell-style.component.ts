import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "[appSectionCellStyle]",
  templateUrl: "./welcome-section-cell-style.component.html",
  styleUrls: ["../feature-box.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class WelcomeSectionCellStyleComponent {
}
