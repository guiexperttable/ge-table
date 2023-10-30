import { ChangeDetectionStrategy, Component } from "@angular/core";
import { GeTypewriterModule } from "../../common/ge-typewriter/ge-typewriter.module";
import { NgIf } from "@angular/common";


@Component({
  selector: "[appSectionHero]",
  templateUrl: "./welcome-section-hero.component.html",
  styleUrls: ["./welcome-section-hero.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    GeTypewriterModule,
    NgIf
  ],
  standalone: true
})
export class WelcomeSectionHeroComponent {
}
