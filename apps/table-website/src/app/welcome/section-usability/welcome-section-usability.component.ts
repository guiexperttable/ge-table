import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "[appSectionUsebility]",
  templateUrl: "./welcome-section-usability.component.html",
  styleUrls: ["../feature-box.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class WelcomeSectionUsabilityComponent {
}
