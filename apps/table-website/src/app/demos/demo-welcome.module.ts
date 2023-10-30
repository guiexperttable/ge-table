import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DemosComponent } from "./demos.component";
import { GeLogoModule } from "../ge-logo/ge-logo.module";
import { BidiModule } from "@angular/cdk/bidi";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

const routes: Routes = [
  {
    path: "",
    component: DemosComponent
  }
];

@NgModule({
  declarations: [
    DemosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeLogoModule,
    BidiModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [RouterModule]
})
export class DemoWelcomeModule {
}

