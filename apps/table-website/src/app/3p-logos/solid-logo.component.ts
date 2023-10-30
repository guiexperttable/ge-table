import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-solid-logo",
  template: `
    <!-- SOLIDJS -->
    <svg class="solid-svg"
         enable-background="new 0 0 166 155.3"
         viewBox="0 0 166 155.3"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="a" x1="27.028" x2="151.542" y1="3.451" y2="63.891">
          <stop offset=".118" stop-color="#bbbdbf" />
          <stop offset=".299" stop-color="#f1f1f2" />
          <stop offset="1" stop-color="#d0d2d3" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="b" x1="95.307" x2="73.509" y1="32.988" y2="105.648">
          <stop offset="0" stop-color="#bbbdbf" />
          <stop offset=".475" stop-color="#929497" />
          <stop offset="1" stop-color="#58595b" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="c" x1="17.932" x2="143.767" y1="64.628" y2="150.169">
          <stop offset="0" stop-color="#58595b" />
          <stop offset=".539" stop-color="#929497" />
          <stop offset="1" stop-color="#58595b" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="d" x1="74.763" x2="23.901" y1="74.909" y2="261.184">
          <stop offset="0" stop-color="#4377bb" />
          <stop offset="0" stop-color="#808184" />
          <stop offset=".475" stop-color="#404041" />
          <stop offset="1" stop-color="#231f20" />
        </linearGradient>
      </defs>
      <path
        d="m162.5 35.7s-52.7-39.8-93.6-30.5c-1.2.3-2.5.6-3.6 1-6.3 2-11 5.5-13.9 9.7-.6.8-1 1.7-1.5 2.5l-15.1 25.7 26.1 5.1c10.3 7.4 24.8 10.5 37.2 7.3l46.5 9.1z"
        fill="#bbbdbf" />
      <path
        d="m162.5 35.7s-52.7-39.8-93.6-30.5c-1.2.3-2.5.6-3.6 1-6.3 2-11 5.5-13.9 9.7-.6.8-1 1.7-1.5 2.5l-15.1 25.7 26.1 5.1c10.3 7.4 24.8 10.5 37.2 7.3l46.5 9.1z"
        fill="url(#a)" opacity=".29" />
      <path
        d="m51 35.2c-1.2.3-2.5.6-3.6 1-16.7 5.4-22.4 21-12.8 34.7s30.9 20.5 47.6 15.1l62.4-20.2c0-.1-52.7-39.9-93.6-30.6z"
        fill="#929497" />
      <path
        d="m51 35.2c-1.2.3-2.5.6-3.6 1-16.7 5.4-22.4 21-12.8 34.7s30.9 20.5 47.6 15.1l62.4-20.2c0-.1-52.7-39.9-93.6-30.6z"
        fill="url(#b)" opacity=".34" />
      <path
        d="m133.1 80.2c-9.6-13.7-30.9-20.5-47.6-15.1l-62.4 20.2-19.6 35 111.6 19.1 20-35.6c4-7 3.6-15.6-2-23.6z"
        fill="url(#c)" />
      <path
        d="m113.5 115.1c-9.6-13.7-30.9-20.5-47.6-15.1l-62.4 20.3s52.7 39.8 93.6 30.5c1.2-.3 2.5-.6 3.6-1 16.7-5.4 22.4-21 12.8-34.7z"
        fill="url(#d)" />
    </svg>
    <!--          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 155.3"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="27.5" y1="3" x2="152" y2="63.5"><stop offset=".1" stop-color="#76b3e1"/><stop offset=".3" stop-color="#dcf2fd"/><stop offset="1" stop-color="#76b3e1"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="95.8" y1="32.6" x2="74" y2="105.2"><stop offset="0" stop-color="#76b3e1"/><stop offset=".5" stop-color="#4377bb"/><stop offset="1" stop-color="#1f3b77"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="18.4" y1="64.2" x2="144.3" y2="149.8"><stop offset="0" stop-color="#315aa9"/><stop offset=".5" stop-color="#518ac8"/><stop offset="1" stop-color="#315aa9"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="75.2" y1="74.5" x2="24.4" y2="260.8"><stop offset="0" stop-color="#4377bb"/><stop offset=".5" stop-color="#1a336b"/><stop offset="1" stop-color="#1a336b"/></linearGradient></defs><path d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z" fill="#76b3e1"/><path d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z" opacity=".3" fill="url(#a)"/><path d="M52 35l-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z" fill="#518ac8"/><path d="M52 35l-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z" opacity=".3" fill="url(#b)"/><path d="M134 80a45 45 0 00-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z" fill="url(#c)"/><path d="M114 115a45 45 0 00-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z" fill="url(#d)"/></svg>-->

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class SolidLogoComponent {
}
