import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, ValidationErrors } from "@angular/forms";
import { debounceTime, Subject } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { GenerateHierarchyService } from "./generate-hierarchy.service";
import { PersonIf } from "../demos/treetablepeople/data/person.if";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-generator",
  templateUrl: "./generator.component.html",
  styleUrls: ["./generator.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneratorComponent implements OnInit, OnDestroy {

  error = "";
  out = "";

  firstFormGroup = this.formBuilder.group({
    firstCtrl: [
      "",
      (_control: AbstractControl): ValidationErrors | null => {
        if (this.error) {
          return {
            jsonError: this.error
          };
        }
        return null;
      }
    ]
  });

  private input$ = new Subject<number>();

  private oo = [
    {
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com",
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
      },
      books: [
        {
          title: "titel 1",
          isbn: 23456
        },
        {
          title: "titel 2",
          isbn: 1234
        },
        {
          title: "titel 3"
        },
        {
          title: "titel 4",
          isbn: null
        },
        {
          title: "titel 5",
          isbn: 8765
        }
      ]
    },
    {
      name: "John Doe2",
      age: 32,
      email: "johndoe@example.com",
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
      },
      books: [
        {
          title: "titel 1",
          isbn: 23456
        },
        {
          title: "titel 2",
          isbn: 1234
        },
        {
          title: "titel 5",
          isbn: 8765
        }
      ]
    }
  ];
  private alive = true;

  constructor(
    private readonly generateHierarchyService: GenerateHierarchyService,
    private readonly cdr: ChangeDetectorRef,
    private readonly formBuilder: FormBuilder,
    private readonly http: HttpClient
  ) {

  }



  private _text = JSON.stringify(this.oo, null, 4);

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
    this.input$.next(Date.now());
  }

  ngOnInit(): void {
    this.http
      .get<PersonIf[]>("/assets/demo/tree-persons.json")
      .subscribe(o => this.text = JSON.stringify(o, null, 2)); // TODO delete fetch

    this.input$
      .pipe(
        takeWhile(() => this.alive),
        debounceTime(1000)
      )
      .subscribe(this.generateInterfaces.bind(this));
    this.input$.next(Date.now());
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  private generateInterfaces() {
    this.error = "";
    // Reset source-code component:
    this.out = "";
    this.cdr.detectChanges();

    try {
      let classScope = this.generateHierarchyService.json2Hierarchy(this._text);
      this.out = classScope.ts;

    } catch (e) {
      this.error = `${e}`;
      this.out = "";

    } finally {
      this.cdr.detectChanges();
    }
  }
}
