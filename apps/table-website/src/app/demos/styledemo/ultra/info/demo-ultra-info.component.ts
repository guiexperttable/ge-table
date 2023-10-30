import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "demo-ultra-info",
  templateUrl: "./demo-ultra-info.component.html",
  styleUrls: ["./demo-ultra-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoUltraInfoComponent implements OnInit {

  ngOnInit(): void {
  }

}
