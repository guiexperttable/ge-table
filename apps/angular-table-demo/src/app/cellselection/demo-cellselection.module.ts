import {NgModule} from '@angular/core';

import {TableComponent} from "@guiexpert/angular-table";
import {DemoCellselectionComponent} from "./demo-cellselection.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DemoCellselectionComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: 'cellselection',
        component: DemoCellselectionComponent
      }
    ]),
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [DemoCellselectionComponent],
})
export class DemoCellselectionModule {
}
