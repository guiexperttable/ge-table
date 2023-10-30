import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { GetstartedReactComponent } from "./getstarted-react.component";
import { GeLogoModule } from "../../ge-logo/ge-logo.module";
import { TableComponent } from "@guiexpert/angular-table";
import { MatIconModule } from "@angular/material/icon";
import { ReactLogoComponent } from "../../3p-logos/react-logo.component";
import { SourceCodeModule } from "../../common/code/source-code.module";
import { CircleLetterModule } from "../../common/circle-letter.module";
import { PreactLogoComponent } from "../../3p-logos/preact-logo.component";


const routes: Routes = [
  {
    path: "react",
    component: GetstartedReactComponent
  }
];

@NgModule({
  declarations: [
    GetstartedReactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeLogoModule,
    ReactLogoComponent,
    MatIconModule,
    MatButtonModule,
    TableComponent,
    SourceCodeModule,
    CircleLetterModule,
    PreactLogoComponent
  ],
  exports: [RouterModule]
})
export class GetstartedReactModule {
}
