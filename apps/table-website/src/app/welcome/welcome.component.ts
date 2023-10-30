import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit
} from "@angular/core";
import {SidemenuService} from "../common/screen/sidemenu.service";
import {takeWhile} from "rxjs/operators";


@Component({
  selector: "app-doc-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit, OnDestroy {

  sideMenuNeedsSpace = true;

  private alive = true;
  private nativeElement: HTMLDivElement;
  private headlines = [
    "",
    "Excellent performance",
    "High Interactivity",
    "Extreme Customizable",
    "Open Source"
  ];

  constructor(
    private readonly sidemenuService: SidemenuService,
    private readonly elementRef: ElementRef,
    private readonly cdr: ChangeDetectorRef,
    //  @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.sideMenuNeedsSpace = this.sidemenuService.sideMenuNeedsSpace;
    this.nativeElement = this.elementRef.nativeElement;
    this.nativeElement.addEventListener("scroll", this.onScroll.bind(this), false);

    this.nativeElement.style.setProperty("--ge-welcome-scrolldown-display", `block`);
    this.nativeElement.style.setProperty("--ge-welcome-scrolldown-display-else", `none`);
    this.nativeElement.style.setProperty("--ge-stroke-dashoffset", "283");
    this.nativeElement.style.setProperty("--ge-headline-hero-super-content", "''");
    this.nativeElement.style.setProperty("--ge-hero-text-content", "''");
    this.nativeElement.style.setProperty("--ge-hero-action-opacity", "0");
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  @HostListener("window:resize", ["$event"])
  onResize(_event?: Event) {
    let s = Math.min(this.nativeElement.clientWidth / 2, this.nativeElement.clientHeight / 2);
    s = Math.min(400, Math.max(200, s));
    this.nativeElement.style.setProperty("--ge-welcome-img-width-number", `${s}`);
  }


  scrollTo(sel: string) {
    document.querySelector(`${sel}`)?.scrollIntoView({ behavior: "smooth" });
  }

  scrollDown() {
    const h = document.body.offsetHeight;
    this.nativeElement.scrollBy({
      top: h,
      left: 0,
      behavior: "smooth"
    });
  }

  scroll2Top() {
    this.nativeElement.scrollBy({
      top: -99999,
      left: 0,
      behavior: "smooth"
    });
  }

  scroll2Bottom() {
    this.nativeElement.scrollBy({
      top: 99999,
      left: 0,
      behavior: "smooth"
    });
  }

  ngOnInit(): void {
    this.onResize();
    this.sidemenuService
      .onSideMenuNeedsSpace$
      .pipe(takeWhile(() => this.alive))
      .subscribe(evt => {
        this.sideMenuNeedsSpace = evt;
        this.cdr.detectChanges();
      });
  }

  private onScroll() {
    requestAnimationFrame(this.calcCssPropertiesAfterScrolling.bind(this));
  }

  private calcCssPropertiesAfterScrolling() {
    const offsetHeight = this.nativeElement.clientHeight;
    const scrollHeight = this.nativeElement.scrollHeight;
    const scrollTop = this.nativeElement.scrollTop;

    // Rotation:
    const r0 = (scrollTop - offsetHeight) * 360 / (4 * offsetHeight);
    const r1 = Math.max(-270, Math.min(270, r0));

    // scroll circle indicator:
    const dashBoardOffset = (283 * (1.001 - (scrollTop / (scrollHeight - offsetHeight))));

    // Zoom:
    let zoom = r0 <= 275 ? 1 : ((r0 - 275) / 4);
    if (zoom < 1) {
      zoom = 1;
    }
    zoom = Math.min(10, zoom);
    const headlinesIdx = Math.min(this.headlines.length - 1, Math.round(scrollTop / offsetHeight));
    const opacity = scrollTop > (4.5 * offsetHeight) ? 0 : 1;
    const displayHeroText = zoom > 2 ? "none" : "grid";

    const displayScrollDown = (scrollTop > scrollHeight - offsetHeight * 1.9) ? "none" : "block";
    const displayScrollDownElse = (displayScrollDown === "block") ? "none" : "block";

    const oklchPerc = 100 - Math.min(100, Math.max(scrollTop / offsetHeight, 0)) * 100;
    const heroTextColor = `oklch(${oklchPerc}% 0 0)`; // oklch(100% 0 0) = #fff,  oklch(0% 0 0) = #000

    const heroActionOpacity = Math.round(scrollTop / offsetHeight);

    this.nativeElement.style.setProperty("--ge-hero-text-color", `${heroTextColor}`);
    this.nativeElement.style.setProperty("--ge-stroke-dashoffset", `${dashBoardOffset}`); // for progress-circle-bar
    this.nativeElement.style.setProperty("--ge-welcome-rotate", `${-r1}deg`); // rotateY for cube
    this.nativeElement.style.setProperty("--ge-welcome-zoom", `${zoom}`); // zooming into cube -> section 'Features'
    this.nativeElement.style.setProperty("--ge-welcome-opacity", `${opacity}`); // opacity of cube: if cube is scrolled out of view => opacity = 0
    this.nativeElement.style.setProperty("--ge-welcome-scrolldown-display", `${displayScrollDown}`); // if page scrolled down, the 'none'. else 'block'
    this.nativeElement.style.setProperty("--ge-welcome-scrolldown-display-else", `${displayScrollDownElse}`); // the display property of the 'Scroll to top' arrow
    this.nativeElement.style.setProperty("--ge-hero-action-opacity", `${heroActionOpacity}`); // opacity of 'Get Started' button
    this.nativeElement.style.setProperty("--ge-headline-hero-super-content", "'" + this.headlines[headlinesIdx] + "'"); // Text of hero title
    this.nativeElement.style.setProperty("--ge-headline-hero-super-display", displayHeroText); // Display property of hero title

    // Rotation of feature images:
    const rotH = 0.5 + ((scrollTop + offsetHeight / 2) % offsetHeight) / offsetHeight;
    const rotDeg = -(rotH * 180 - 180);
    const rotateY = `${rotDeg}deg`;
    this.nativeElement.style.setProperty("--ge-welcome-rotate-feature-img", rotateY);
  }


}
