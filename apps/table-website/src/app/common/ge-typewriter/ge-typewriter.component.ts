import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, NgZone} from "@angular/core";


@Component({
  selector: "ge-typewriter",
  templateUrl: "./ge-typewriter.component.html",
  styleUrls: ["./ge-typewriter.component.scss"]
})
export class GeTypewriterComponent implements AfterViewInit {


  @Input()
  public toRotate: string[] = [
    "Enhance Data Visualization",
    "Handle large datasets easily",
    "Fully-featured",
    "Advanced sorting and filtering",
    "Highly customizable data grid",
    "Outstanding performance",
    "No third-party dependencies",
    "UI-agnostic",
  ];

  @Input() public period = 2000
  @Input() public clickDelay = 200;
  @Input() public clickDelayRandom = 100;
  @Input() public emptyTextPeriod = 500;

  private nativeElement: HTMLDivElement;
  private spanElement: HTMLSpanElement | null = null;
  private loopNum = 0;
  private txt = '';
  private deleting = false;
  private alive = true;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly ngZone: NgZone,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.nativeElement = this.elementRef.nativeElement;
  }


  ngAfterViewInit(): void {
    this.cdr.detach();
    this.spanElement = this.nativeElement.querySelector<HTMLSpanElement>('.wrap');

    // First call (, later recursive):
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(this.tick.bind(this));
    });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }


  private tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.deleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    const html = this.txt.length ? this.txt : '&nbsp;';
    if (this.spanElement) {
      this.spanElement.innerHTML = html;
    }

    let delta = this.clickDelay - Math.random() * this.clickDelayRandom;
    if (this.deleting) {
      delta /= 2;
    }

    if (!this.deleting && this.txt === fullTxt) {
      delta = this.period;
      this.deleting = true;

    } else if (this.deleting && this.txt === '') {
      this.deleting = false;
      this.loopNum++;
      delta = this.emptyTextPeriod;
    }

    setTimeout(() => {
      if (this.alive) {
        requestAnimationFrame(this.tick.bind(this));
      }
    }, delta);
  }

}
