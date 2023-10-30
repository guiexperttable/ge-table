import { NgModule } from "@angular/core";

import { TableComponent } from "@guiexpert/angular-table";
import { DemoStyleComponent } from "./stylecolor/demo-style.component";
import { RouterModule } from "@angular/router";
import { DemoUltraComponent } from "./ultra/demo-ultra.component";
import { DemoUltraInfoComponent } from "./ultra/info/demo-ultra-info.component";
import { DemoStyleInfoComponent } from "./stylecolor/info/demo-style-info.component";
import { DemoHeatmapComponent } from "./heatmap/demo-heatmap.component";
import { DemoHeatmapInfoComponent } from "./heatmap/demo-heatmap-info.component";
import { DemoHeatmapSeattleInfoComponent } from "./heatmapseattle/demo-heatmap-seattle-info.component";
import { DemoHeatmapSeattleComponent } from "./heatmapseattle/demo-heatmap-seattle.component";
import { DemoHeatmapSeattleModule } from "./heatmapseattle/demo-heatmap-seattle.module";
import { NgIf } from "@angular/common";
import {SourceCodeModule} from "../../common/code/source-code.module";

@NgModule({
  declarations: [
    DemoStyleComponent,
    DemoUltraComponent,
    DemoHeatmapComponent,
    DemoHeatmapInfoComponent,
    DemoStyleInfoComponent,
    DemoUltraInfoComponent

  ],
  imports: [
    TableComponent,
    DemoHeatmapSeattleModule,
    RouterModule.forChild([
      {
        path: "simple/run",
        component: DemoStyleComponent
      },
      {
        path: "simple/info",
        component: DemoStyleInfoComponent
      },
      {
        path: "heatmaptemp/run",
        component: DemoHeatmapComponent
      },
      {
        path: "heatmaptemp/info",
        component: DemoHeatmapInfoComponent
      },
      {
        path: "heatmapseattle/run",
        component: DemoHeatmapSeattleComponent
      },
      {
        path: "heatmapseattle/info",
        component: DemoHeatmapSeattleInfoComponent
      },
      {
        path: "ultra/run",
        component: DemoUltraComponent
      },
      {
        path: "ultra/info",
        component: DemoUltraInfoComponent
      }
    ]),
    NgIf,
    SourceCodeModule
  ]
})
export class DemoStyleModule {
}
