import { NgModule } from "@angular/core";

import { TableComponent } from "@guiexpert/angular-table";
import { DemoMouseeventComponent } from "./demo-mouseevent.component";
import { RouterModule } from "@angular/router";
import { DemoMouseeventInfoComponent } from "./info/demo-mouseevent-info.component";
import { NgIf } from "@angular/common";
import {SourceCodeModule} from "../../common/code/source-code.module";

@NgModule({
  declarations: [DemoMouseeventComponent, DemoMouseeventInfoComponent],
    imports: [
        TableComponent,
        RouterModule.forChild([
            {
                path: "run",
                component: DemoMouseeventComponent
            },
            {
                path: "info",
                component: DemoMouseeventInfoComponent
            }
        ]),
        NgIf,
        SourceCodeModule
    ]
})
export class DemoMouseeventModule {
}
