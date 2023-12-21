import {NgModule} from '@angular/core';

import {TableComponent} from "@guiexpert/angular-table";
import {DemoCellselectionComponent} from "./demo-cellselection.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [DemoCellselectionComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "cellselection",
        component: DemoCellselectionComponent
      }
    ]),
    MatInputModule,
    MatFormFieldModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [DemoCellselectionComponent],
})
export class DemoCellselectionModule {
}
