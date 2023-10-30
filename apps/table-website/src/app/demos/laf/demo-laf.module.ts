import { NgModule } from "@angular/core";
import { TableComponent } from "@guiexpert/angular-table";
import { RouterModule } from "@angular/router";
import { DemoLafComponent } from "./demo-laf.component";
import { DemoLafInfoComponent } from "./demo-laf-info.component";
import { SourceCodeModule } from "../../common/code/source-code.module";
import { CircleLetterModule } from "../../common/circle-letter.module";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";

@NgModule({
  declarations: [
    DemoLafComponent,
    DemoLafInfoComponent
  ],
  imports: [
    TableComponent,
    RouterModule.forChild([
      {
        path: "run",
        component: DemoLafComponent
      },
      {
        path: "info",
        component: DemoLafInfoComponent
      }
    ]),
    SourceCodeModule,
    CircleLetterModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    NgForOf
  ]
})
export class DemoLafModule {
}
