import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { GetstartedPreactComponent } from "./getstarted-preact.component";
import { GeLogoModule } from "../../ge-logo/ge-logo.module";
import { TableComponent } from "@guiexpert/angular-table";
import { MatIconModule } from "@angular/material/icon";
import { PreactLogoComponent } from "../../3p-logos/preact-logo.component";
import { SourceCodeModule } from "../../common/code/source-code.module";
import { CircleLetterModule } from "../../common/circle-letter.module";
import { JsLogoComponent } from "../../3p-logos/js-logo.component";


const routes: Routes = [
  {
    path: "preact",
    component: GetstartedPreactComponent
  }
];

@NgModule({
  declarations: [
    GetstartedPreactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeLogoModule,
    PreactLogoComponent,
    MatIconModule,
    MatButtonModule,
    TableComponent,
    SourceCodeModule,
    CircleLetterModule,
    JsLogoComponent
  ],
  exports: [RouterModule]
})
export class GetstartedPreactModule {
}
