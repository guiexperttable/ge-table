import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PricingComponent } from "./pricing.component";
import { GeLogoModule } from "../ge-logo/ge-logo.module";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";


const routes: Routes = [
  {
    path: "",
    component: PricingComponent
  }
];

@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeLogoModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [RouterModule]
})
export class PricingModule {
}
