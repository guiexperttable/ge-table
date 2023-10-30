import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ApiComponent } from "./api.component";
import { GeLogoModule } from "../ge-logo/ge-logo.module";
import { TsdocComponent } from "./tsdoc/tsdoc.component";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { SafePipe } from "./tsdoc/safe-pipe";


const routes: Routes = [
  {
    path: "",
    component: ApiComponent
  },
  {
    path: "tsdoc/:id/:id2",
    component: TsdocComponent
  }
];

@NgModule({
  declarations: [
    ApiComponent,
    TsdocComponent,
    SafePipe
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
export class ApiModule {
}
