import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LicenseComponent } from "./license.component";
import { GeLogoModule } from "../ge-logo/ge-logo.module";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";


const routes: Routes = [
  {
    path: "",
    component: LicenseComponent
  }
];

@NgModule({
  declarations: [
    LicenseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeLogoModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [RouterModule]
})
export class LicenseModule {
}
