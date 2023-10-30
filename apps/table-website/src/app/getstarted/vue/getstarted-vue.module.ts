import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { GetstartedVueComponent } from "./getstarted-vue.component";
import { GeLogoModule } from "../../ge-logo/ge-logo.module";
import { TableComponent } from "@guiexpert/angular-table";
import { MatIconModule } from "@angular/material/icon";
import { VueLogoComponent } from "../../3p-logos/vue-logo.component";
import { SourceCodeModule } from "../../common/code/source-code.module";
import { CircleLetterModule } from "../../common/circle-letter.module";
import { PreactLogoComponent } from "../../3p-logos/preact-logo.component";


const routes: Routes = [
  {
    path: "vue",
    component: GetstartedVueComponent
  }
];

@NgModule({
  declarations: [
    GetstartedVueComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeLogoModule,
    VueLogoComponent,
    MatIconModule,
    MatButtonModule,
    TableComponent,
    SourceCodeModule,
    CircleLetterModule,
    PreactLogoComponent
  ],
  exports: [RouterModule]
})
export class GetstartedVueModule {
}
