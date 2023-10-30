import { ChangeDetectionStrategy, Component, Input } from "@angular/core";


@Component({
  selector: "circle-letter",
  template: `
    <div>
      <div class="thin-border">
        <label [innerText]="text"></label>
      </div>
    </div>
  `,
  styles: [`
      :host {
        display: inline-block;
        width: 2.56rem;
        height: 2.56rem;
        border-width: 0.25px;
        border-style: solid;
        border-radius: 50%;
        margin-right: 0.5rem;
        position: relative;
        top: -4px;
      }
      .thin-border {
        width: 2.56rem;
        height: 2.56rem;
      }
      label {
        padding-left: 0.7rem;
        position: relative;
        top: 3px;
        font-weight: bold;
        font-size: larger;
      }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleLetterComponent {

  @Input()
  text = "1";

}

