import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { GetstartedJsComponent } from "./getstarted-js.component";
import { GeLogoModule } from "../../ge-logo/ge-logo.module";
import { TableComponent } from "@guiexpert/angular-table";
import { MatIconModule } from "@angular/material/icon";
import { JsLogoComponent } from "../../3p-logos/js-logo.component";
import { SourceCodeModule } from "../../common/code/source-code.module";
import { CircleLetterModule } from "../../common/circle-letter.module";
import { AngularLogoComponent } from "../../3p-logos/angular-logo.component";


const routes: Routes = [
  {
    path: "plainjs",
    component: GetstartedJsComponent
  }
];

@NgModule({
  declarations: [
    GetstartedJsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeLogoModule,
    JsLogoComponent,
    MatIconModule,
    MatButtonModule,
    TableComponent,
    SourceCodeModule,
    CircleLetterModule,
    AngularLogoComponent
  ],
  exports: [RouterModule]
})
export class GetstartedJsModule {
}
