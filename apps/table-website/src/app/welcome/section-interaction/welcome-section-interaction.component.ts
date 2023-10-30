import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "[appSectionInteraction]",
  templateUrl: "./welcome-section-interaction.component.html",
  styleUrls: ["../feature-box.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class WelcomeSectionInteractionComponent {
}
