# Anleitung zur Verwendung von @guiexpert/angular-table und @guiexpert/table

Diese Anleitung zeigt, wie man mit den Bibliotheken `@guiexpert/angular-table` und `@guiexpert/table` HTML-Tabellen in Angular-Anwendungen implementieren kann.

## Einführung

Die GuiExpert Table-Bibliotheken bieten leistungsstarke Komponenten zur Darstellung von Tabellendaten in Angular-Anwendungen:

- **@guiexpert/table**: Die Kern-Bibliothek, die die grundlegende Tabellenfunktionalität bereitstellt
- **@guiexpert/angular-table**: Eine Angular-spezifische Implementierung, die auf der Kern-Bibliothek aufbaut

Diese Bibliotheken unterstützen verschiedene Datenformate, darunter:
- Array von Arrays (zweidimensionale Arrays)
- Array von Objekten (typisierte Daten)

## Installation

Um die Bibliotheken in Ihrem Angular-Projekt zu verwenden, installieren Sie sie mit npm oder pnpm:

```bash
# Mit npm
npm install @guiexpert/table @guiexpert/angular-table

# Mit pnpm
pnpm add @guiexpert/table @guiexpert/angular-table
```

Anschließend importieren Sie das `GuiexpertTableModule` in Ihrem Angular-Modul:

```typescript
import { GuiexpertTableModule } from '@guiexpert/angular-table';

@NgModule({
  imports: [
    // andere Module...
    GuiexpertTableModule
  ],
  // ...
})
export class YourModule { }
```

## Beispiel 1: Tabelle mit Array von Arrays

### 1. Komponenten-Klasse (TypeScript)

```typescript
import { Component } from "@angular/core";
import { TableModelIf, TableOptions } from "@guiexpert/table";
import { generateSimpleModel } from "@guiexpert/demo-table-models";

@Component({
  selector: 'app-array-table',
  templateUrl: './array-table.component.html',
  styleUrls: ['./array-table.component.css'],
})
export class ArrayTableComponent {
  // Erzeuge ein Tabellenmodell mit 1000 Zeilen und 100 Spalten
  tableModel: TableModelIf = generateSimpleModel(1000, 100);
}
```

### 2. Template (HTML)

```html
<guiexpert-table
  [tableModel]="tableModel"
  *ngIf="tableModel"
  class="table-div"
></guiexpert-table>
```

### 3. CSS-Styling

```css
.table-div {
  height: 500px;
  width: 100%;
}
```

## Beispiel 2: Tabelle mit Array von Objekten

### 1. Definieren Sie eine Schnittstelle für Ihre Objekte

```typescript
export interface PersonIf {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  ipAddress: string;
}
```

### 2. Komponenten-Klasse (TypeScript)

```typescript
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PersonIf } from "./person.interface";
import { TableModelIf, TableOptions, TableOptionsIf, TableFactory } from "@guiexpert/table";

@Component({
  selector: "app-object-table",
  templateUrl: "./object-table.component.html",
  styleUrls: ["./object-table.component.css"]
})
export class ObjectTableComponent implements OnInit {

  tableModel?: TableModelIf;
  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 34,
      body: 34,
      footer: 0
    }
  };

  constructor(
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    // Laden der Daten (hier als Beispiel von einer JSON-Datei)
    this.http
      .get<PersonIf[]>("/assets/data/persons.json")
      .subscribe(this.onDataLoaded.bind(this));
  }

  private onDataLoaded(rows: PersonIf[]) {
    // Definieren Sie die Eigenschaften, die als Spalten angezeigt werden sollen
    const properties = ["id", "firstName", "lastName", "email", "ipAddress"];
    
    // Erstellen des Tabellenmodells mit den Objektdaten
    this.tableModel = TableFactory.createTableModel({
      properties,
      rows,
      defaultRowHeights: this.tableOptions.defaultRowHeights
    });
  }
}
```

### 3. Template (HTML)

```html
<guiexpert-table
  [tableOptions]="tableOptions"
  [tableModel]="tableModel"
  *ngIf="tableModel"
  class="table-div"
></guiexpert-table>
```

### 4. CSS-Styling

```css
.table-div {
  height: 500px;
  width: 100%;
}
```

## Erweiterte Konfigurationsoptionen

Die Tabellen können mit verschiedenen Optionen angepasst werden:

### TableOptions

```typescript
const tableOptions: TableOptionsIf = {
  ...new TableOptions(),
  // Zeigt eine Hover-Spalte an
  hoverColumnVisible: true,
  
  // Definiert die Zeilenhöhen für verschiedene Tabellenbereiche
  defaultRowHeights: {
    header: 40,
    body: 30,
    footer: 40
  },
  
  // Aktiviert die Zeilenauswahl
  selectionMode: 'single', // oder 'multi'
  
  // Aktiviert die Sortierung
  sortable: true,
  
  // Aktiviert die Filterung
  filterable: true,
  
  // Passt die Spaltenbreite an den Inhalt an
  autoSizeColumns: true
};
```

### Benutzerdefinierte Zellrenderer

Sie können benutzerdefinierte Zellrenderer implementieren, um die Darstellung von Zellen anzupassen:

```typescript
import { AreaModelObjectyArray, ColumnDefIf, TableFactory } from "@guiexpert/table";

// Benutzerdefinierte Spaltendefiniton
const columnDefs: ColumnDefIf[] = [
  {
    property: "id",
    headerLabel: "ID",
    width: 80
  },
  {
    property: "firstName",
    headerLabel: "Vorname",
    width: 150
  },
  {
    property: "lastName",
    headerLabel: "Nachname",
    width: 150,
    // Benutzerdefinierter Renderer für diese Spalte
    renderer: (value, rowIndex, columnIndex) => {
      return `<strong>${value}</strong>`;
    }
  }
];

// Erstellen des Tabellenmodells mit benutzerdefinierten Spaltendefinitionen
this.tableModel = TableFactory.createTableModel({
  rows: data,
  columnDefs,
  defaultRowHeights: this.tableOptions.defaultRowHeights
});
```

## Ereignisbehandlung

Sie können auf Tabellenereignisse reagieren:

```html
<guiexpert-table
  [tableModel]="tableModel"
  [tableOptions]="tableOptions"
  (cellClick)="onCellClick($event)"
  (selectionChanged)="onSelectionChanged($event)"
  *ngIf="tableModel"
  class="table-div"
></guiexpert-table>
```

```typescript
onCellClick(event: any) {
  console.log('Cell clicked:', event);
}

onSelectionChanged(event: any) {
  console.log('Selection changed:', event);
}
```

## Fazit

Die `@guiexpert/angular-table` und `@guiexpert/table` Bibliotheken bieten eine flexible und leistungsstarke Lösung für die Darstellung von Tabellendaten in Angular-Anwendungen. Sie unterstützen sowohl einfache Arrays als auch komplexe Objektstrukturen und bieten zahlreiche Anpassungsmöglichkeiten.
