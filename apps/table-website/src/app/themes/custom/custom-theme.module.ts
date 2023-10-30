import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CustomThemeComponent } from "./custom-theme.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { GeLogoModule } from "../../ge-logo/ge-logo.module";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { TableComponent } from "@guiexpert/angular-table";
import { PrizesDemoModule } from "../../demos/prizesdemo/prizes-demo.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { ExportDialogComponent } from "./exportdialog/export-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { SourceCodeModule } from "../../common/code/source-code.module";
import { SmallCustomThemeComponent } from "./picker/small-custom-theme.component";


const routes: Routes = [
  {
    path: "picker",
    component: SmallCustomThemeComponent
  },
  {
    path: "",
    component: CustomThemeComponent
  }
];

@NgModule({
  declarations: [
    CustomThemeComponent,
    ExportDialogComponent,
    SmallCustomThemeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatButtonModule,
    MatSliderModule,
    ReactiveFormsModule,
    GeLogoModule,
    MatIconModule,
    TableComponent,
    PrizesDemoModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    SourceCodeModule
  ],
  exports: [RouterModule]
})
export class CustomThemeModule {
}
