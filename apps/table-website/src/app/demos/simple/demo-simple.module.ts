import { NgModule } from "@angular/core";
import { TableComponent } from "@guiexpert/angular-table";
import { RouterModule } from "@angular/router";
import { DemoSimpleComponent } from "./demo-simple.component";
import { DemoSimpleInfoComponent } from "./demo-simple-info.component";
import { SourceCodeModule } from "../../common/code/source-code.module";
import { CircleLetterModule } from "../../common/circle-letter.module";
import { NgIf } from "@angular/common";

@NgModule({
  declarations: [
    DemoSimpleComponent,
    DemoSimpleInfoComponent
  ],
  imports: [
    TableComponent,
    RouterModule.forChild([
      {
        path: "run",
        component: DemoSimpleComponent
      },
      {
        path: "info",
        component: DemoSimpleInfoComponent
      }
    ]),
    SourceCodeModule,
    CircleLetterModule,
    NgIf
  ]
})
export class DemoSimpleModule {
}
