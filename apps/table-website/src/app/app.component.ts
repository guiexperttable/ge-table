import {Component, ElementRef, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: "guiexpert-table-doc-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly elementRef: ElementRef
  ) {
    if (location.protocol === 'http:' && location.hostname !== 'localhost') {
      location.replace('https://' + location.host);
    }
  }

  ngOnInit(): void {
    this.router
      .events
      .subscribe(evt => {
        if (evt instanceof NavigationEnd) {
          const clazz = this.classByUrl(evt.url);
          this.elementRef.nativeElement.removeAttribute("class");
          this.elementRef.nativeElement.classList.add(clazz);

          const title = this.getTitleByUrl(evt.url);
          document.title = title;
        }
      });
  }

  private classByUrl(url: string): string {
    if (url.includes("/doc")) return "doc";
    if (url.includes("/api")) return "api";
    if (url.includes("/demo")) return "demo";
    if (url.includes("/welcome")) return "welcome";
    if (url.includes("/privacy")) return "welcome";
    if (url.includes("/cou")) return "welcome";
    if (url.includes("/imprint")) return "welcome";
    if (url.includes("/themes/custom")) return "custom";
    return "xxx";
  }

  private getTitleByUrl(url: string): string {
    if (url.includes("/doc")) return "Documentation";
    if (url.includes("/api")) return "API";
    if (url.includes("/demo")) return "Demos";
    if (url.includes("/welcome")) return "GUI Expert Table";
    if (url.includes("/pricing")) return "Pricing";
    if (url.includes("/imprint")) return "Imprint";
    if (url.includes("/license")) return "Dual Licensing";
    if (url.includes("/themes/custom")) return "Theme Generator";
    if (url==='/') return "GUI Expert Table";
    return "";
  }


}
