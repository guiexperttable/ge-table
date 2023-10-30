import { NgModule } from "@angular/core";

import { TableComponent } from "@guiexpert/angular-table";
import { RouterModule } from "@angular/router";
import { DemoHeatmapSeattleInfoComponent } from "./demo-heatmap-seattle-info.component";
import { DemoHeatmapSeattleComponent } from "./demo-heatmap-seattle.component";
import { NgIf } from "@angular/common";
import {SourceCodeModule} from "../../../common/code/source-code.module";


@NgModule({
  declarations: [
    DemoHeatmapSeattleComponent,
    DemoHeatmapSeattleInfoComponent
  ],
    imports: [
        TableComponent,
        RouterModule.forChild([
            {
                path: "heatmapseattle/run",
                component: DemoHeatmapSeattleComponent
            },
            {
                path: "heatmapseattle/info",
                component: DemoHeatmapSeattleInfoComponent
            }
        ]),
        NgIf,
        SourceCodeModule
    ]
})
export class DemoHeatmapSeattleModule {
}
