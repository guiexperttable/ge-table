import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
    selector: "app-doc-and-demo-link",
    template: `
        <p>
            There are numerous possibilities to create table models.
            Please refer to the <a href="/doc">Documentation</a> for further information or the <a href="/demos">Demo</a> section
            for examples.
        </p>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    standalone: true
})
export class DocAndDemoLinkComponent {}
