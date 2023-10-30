import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation.component";
import { GeLogoModule } from "../ge-logo/ge-logo.module";
import {ScreenModule} from "../common/screen/screen.module";

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    GeLogoModule,
    ScreenModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
