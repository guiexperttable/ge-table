import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit} from "@angular/core";
import {TableApi} from "@guiexpert/table";
import {debounceTime, takeWhile} from "rxjs";


@Component({
  selector: "[appWelcomeDemo]",
  templateUrl: "./welcome-demo.component.html",
  styleUrls: ["./welcome-demo.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeDemoComponent implements OnInit, OnDestroy {

  filterText = "";
  sentFilterText = '';

  private filter$ = new EventEmitter<number>();
  private alive = true;

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {
  }


  ngOnInit(): void {
    this.filter$
      .pipe(
        takeWhile(() => this.alive),
        debounceTime(400)
      )
      .subscribe(() => {
        this.sentFilterText = this.filterText;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  onKeyup() {
    this.filter$.next(Date.now());
  }



}
