import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { NavigationModule } from "./navigation/navigation.module";
import { AppRoutingModule } from "./app-routing.module";
import { TableComponent } from "@guiexpert/angular-table";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavigationModule,
    TableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
