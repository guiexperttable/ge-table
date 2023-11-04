import {ChangeDetectionStrategy, Component, Input} from "@angular/core";


@Component({
    selector: "app-stackblitz",
    template: `
        <a target="_blank" [href]="'https://stackblitz.com/edit/' + text">
            <span aria-hidden="true" 
                  style="--logo-gap: 2px;">
                <svg viewBox="0 0 28 28" 
                     aria-hidden="true" 
                     class="_boltIcon_yct9u_9 _boltIcon_blue_yct9u_14" 
                     height="24" width="24">
                    <path d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"></path>
                </svg></span> {{text}}    
        </a>
    `,
    styles: [

    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class StackblitzComponent {
    @Input() text = '';
}
