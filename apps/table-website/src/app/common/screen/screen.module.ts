import {NgModule} from "@angular/core";
import {SidemenuService} from "./sidemenu.service";
import {FullscreenService} from "./fullscreen.service";

@NgModule({
  providers: [
    SidemenuService,
    FullscreenService
  ]
})
export class ScreenModule {
}
