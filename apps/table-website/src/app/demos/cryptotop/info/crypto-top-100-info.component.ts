import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "crpyto-top-100-demo-info",
  templateUrl: "./crypto-top-100-info.component.html",
  styleUrls: ["./crypto-top-100-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoTop100InfoComponent implements OnInit {

  ngOnInit(): void {
  }

}
