import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-preact-logo",
  template: `
    <!-- Preact -->
    <svg height="100%" version="1.1" viewBox="-256 -256 512 512" width="100%" xml:space="preserve"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path
              d="M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z"
              fill="#000" />
      <ellipse cx="0" cy="0" fill="none" rx="75px" ry="196px" stroke="white" stroke-width="16px"
               transform="rotate(52.5)" />
      <ellipse cx="0" cy="0" fill="none" rx="75px" ry="196px" stroke="white" stroke-width="16px"
               transform="rotate(-52.5)" />
      <circle cx="0" cy="0" fill="white" r="34" />
          </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class PreactLogoComponent {
}
