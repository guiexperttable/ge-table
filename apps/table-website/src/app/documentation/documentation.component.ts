import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-documentation",
  templateUrl: "./documentation.component.html",
  styleUrls: ["./documentation.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationComponent {
}
