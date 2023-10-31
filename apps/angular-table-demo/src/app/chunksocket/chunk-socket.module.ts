import {NgModule} from '@angular/core';

import {TableComponent} from "@guiexpert/angular-table";
import {ChunkSocketComponent} from "./chunk-socket.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoadChunkSocketService} from "./load-chunk-socket.service";
// import {LoadChunkSocketService} from "./load-chunk-socket.service";

@NgModule({
  declarations: [ChunkSocketComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "chunksocket",
        component: ChunkSocketComponent
      }
    ]),
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoadChunkSocketService],
  bootstrap: [ChunkSocketComponent],
})
export class ChunkSocketModule {
}
