import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

@Component({
  selector: "[appSectionLicense]",
  templateUrl: "./welcome-section-license.component.html",
  styleUrls: [
    "../feature-box.scss",
    "./welcome-section-license.component.scss"
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  standalone: true
})
export class WelcomeSectionLicenseComponent {
}
