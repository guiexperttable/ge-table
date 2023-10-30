import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "[appSectionFeatures]",
  templateUrl: "./welcome-section-features.component.html",
  styleUrls: [
    "../feature-box.scss",
    "./welcome-section-features.component.scss"
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class WelcomeSectionFeaturesComponent {
}
