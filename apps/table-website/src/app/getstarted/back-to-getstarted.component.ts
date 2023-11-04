import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";


@Component({
    selector: "app-back-to-getstarted",
    template: `
        <button [routerLink]="['/getstarted']" color="primary" mat-flat-button>
            <mat-icon>arrow_back_ios_new</mat-icon>
            Back
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatButtonModule,
        MatIconModule,
        RouterModule
    ],
    standalone: true
})
export class BackToGetstartedComponent {}
