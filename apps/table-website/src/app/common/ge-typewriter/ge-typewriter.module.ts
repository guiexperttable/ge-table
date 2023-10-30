import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GeTypewriterComponent } from "./ge-typewriter.component";

@NgModule({
  declarations: [GeTypewriterComponent],
  imports: [
    CommonModule
  ],
  exports: [GeTypewriterComponent]
})
export class GeTypewriterModule {
}
