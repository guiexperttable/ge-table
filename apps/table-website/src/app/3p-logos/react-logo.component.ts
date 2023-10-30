import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-react-logo",
  template: `
    <!-- React-->
    <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" fill="#000" r="2.05" />
      <g fill="none" stroke="#000" stroke-width="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ReactLogoComponent {
}
