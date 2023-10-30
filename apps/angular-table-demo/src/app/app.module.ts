import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TableComponent} from "@guiexpert/angular-table";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {WelcomeModule} from "./welcome/welcome.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {OverlayModule} from "@angular/cdk/overlay";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableComponent,
    WelcomeModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    OverlayModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}
