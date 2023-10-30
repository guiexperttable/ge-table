import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrizesDemoService } from "./prizes-demo.service";
import { PrizesDemoComponent } from "./prizes-demo.component";
import { HttpClientModule } from "@angular/common/http";
import { TableComponent } from "@guiexpert/angular-table";
import { RouterModule } from "@angular/router";
import { PrizesInfoComponent } from "./info/prizes-info.component";
import { SourceCodeModule } from "../../common/code/source-code.module";


@NgModule({
  declarations: [
    PrizesDemoComponent,
    PrizesInfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "run",
        component: PrizesDemoComponent
      },
      {
        path: "info",
        component: PrizesInfoComponent
      }
    ]),
    SourceCodeModule
  ],
  exports: [
    PrizesDemoComponent
  ],
  providers: [
    PrizesDemoService
  ]
})
export class PrizesDemoModule {
}
