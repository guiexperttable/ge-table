
# Guide to Using @guiexpert/table and Framework-specific Implementations

This guide shows how to create HTML tables in various web applications using the `@guiexpert/table` library and its framework-specific implementations.

## Introduction

The GuiExpert Table libraries provide powerful components for displaying tabular data in various web frameworks:

- **@guiexpert/table**: The core library that provides the basic table functionality
- **@guiexpert/angular-table**: An Angular-specific implementation
- **@guiexpert/react-table**: A React-specific implementation
- **@guiexpert/preact-table**: A Preact-specific implementation
- **@guiexpert/solid-table**: A SolidJS-specific implementation
- **@guiexpert/svelte-table**: A Svelte-specific implementation
- **@guiexpert/vue3-table**: A Vue 3-specific implementation
- **@guiexpert/webcomponent-table**: A Web Component implementation for Plain JS/TS

These libraries support various data formats, including:
- Array of arrays (two-dimensional arrays)
- Array of objects (typed data)

All implementations are based on the same core library and offer similar features, adapted to the conventions and specifics of each framework.

Showcases and examples can be found at:
- [GuiExpert Showcase](https://gui.expert/showcase/)
- [GitHub Repository](https://github.com/guiexperttable)

## Installation

### General Installation

For all implementations, you need the core library `@guiexpert/table` as well as the specific implementation for your framework:

```bash
# With npm
npm install @guiexpert/table @guiexpert/<framework>-table

# With pnpm
pnpm add @guiexpert/table @guiexpert/<framework>-table
```

Replace `<framework>` with one of the supported frameworks: `angular`, `react`, `preact`, `solid`, `svelte`, `vue3`, or `webcomponent`.

### Framework-specific Installation

#### Angular

```bash
npm install @guiexpert/table @guiexpert/angular-table
```

Import the `GuiexpertTableModule` in your Angular module:

```typescript
import { GuiexpertTableModule } from '@guiexpert/angular-table';

@NgModule({
  imports: [
    // other modules...
    GuiexpertTableModule
  ],
  // ...
})
export class YourModule { }
```

#### React

```bash
npm install @guiexpert/table @guiexpert/react-table
```

Import the component directly in your React components:

```typescript
import { GuiexpertTable } from "@guiexpert/react-table";
```

#### Preact

```bash
npm install @guiexpert/table @guiexpert/preact-table
```

Import the component directly in your Preact components:

```typescript
import { GuiexpertTable } from "@guiexpert/preact-table";
```

#### SolidJS

```bash
npm install @guiexpert/table @guiexpert/solid-table
```

Import the component directly in your Solid components:

```typescript
import { GuiexpertTable } from "@guiexpert/solid-table";
```

#### Svelte

```bash
npm install @guiexpert/table @guiexpert/svelte-table
```

Import the component in your Svelte components:

```typescript
import { GuiexpertTable } from "@guiexpert/svelte-table";
```

#### Vue 3

```bash
npm install @guiexpert/table @guiexpert/vue3-table
```

Register the component in your Vue application:

```typescript
import { GuiexpertTable } from "@guiexpert/vue3-table";
```

#### Web Component (Plain JS/TS)

```bash
npm install @guiexpert/table @guiexpert/webcomponent-table
```

Use the Web Component in your HTML:

```html
<guiexpert-table id="table"></guiexpert-table>

<script>
  import { TableApi } from "@guiexpert/webcomponent-table";
  // ...
</script>
```

## Examples for Different Frameworks

### Data Models

GuiExpert Table supports two main types of data models:

1. **Array of Arrays**: Simple two-dimensional arrays, where each inner array represents a row.
2. **Array of Objects**: Typed objects in an array, where each object represents a row.

The examples below show how you can use both data models with different frameworks.

## Array of Arrays Examples

### Angular

#### Component Class (TypeScript)

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
  // Create a table model with 1000 rows and 100 columns
  tableModel: TableModelIf = generateSimpleModel(1000, 100);
}
```

#### Template (HTML)

```html
<guiexpert-table
  [tableModel]="tableModel"
  *ngIf="tableModel"
  class="table-div"
></guiexpert-table>
```

#### CSS Styling

```css
.table-div {
  height: 500px;
  width: 100%;
}
```

### React

```tsx
import { GuiexpertTable } from "@guiexpert/react-table";
import { TableOptions } from "@guiexpert/table";
import { generateSimpleModel } from "@guiexpert/demo-table-models";

export function ArrayTableComponent() {
  // Create a table model with 1000 rows and 100 columns
  const tableModel = generateSimpleModel(1000, 100);

  return (
    <GuiexpertTable
      tableModel={tableModel}
      tableOptions={new TableOptions()}
      className="table-div"
    />
  );
}
```

### Vue 3

```vue
<template>
  <div class="table-div">
    <guiexpert-table
      :tableModel="tableModel"
      @mouseClicked="onMouseClicked($event)"
    ></guiexpert-table>
  </div>
</template>

<script lang="ts" setup>
import { GuiexpertTable } from "@guiexpert/vue3-table";
import { GeMouseEvent } from "@guiexpert/table";
import { generateSimpleModel } from "@guiexpert/demo-table-models";

function onMouseClicked(evt: GeMouseEvent) {
  console.info("demo onMouseClicked", evt);
}

const tableModel = generateSimpleModel(100, 100);
</script>

<style>
.table-div {
  height: 500px;
  width: 100%;
}
</style>
```

### Svelte

```svelte
<script lang="ts">
  import { GuiexpertTable } from "@guiexpert/svelte-table";
  import { TableOptions } from "@guiexpert/table";
  import { generateSimpleModel } from "@guiexpert/demo-table-models";

  // Create a table model with 1000 rows and 100 columns
  const tableModel = generateSimpleModel(1000, 100);
  const tableOptions = new TableOptions();
</script>

<div class="table-div">
  <GuiexpertTable {tableModel} {tableOptions} />
</div>

<style>
  .table-div {
    height: 500px;
    width: 100%;
  }
</style>
```

### Web Component (Plain JS/TS)

```html
<div class="table-div">
  <guiexpert-table id="table"></guiexpert-table>
</div>

<script type="module">
  import { TableApi } from "@guiexpert/webcomponent-table";
  import { generateSimpleModel } from "@guiexpert/demo-table-models";

  // Create a table model with 1000 rows and 100 columns
  const tableModel = generateSimpleModel(1000, 100);

  // Initialize the table
  const tableElement = document.getElementById("table");
  const api = new TableApi(tableElement);
  api.setTableModel(tableModel);
</script>

<style>
  .table-div {
    height: 500px;
    width: 100%;
  }
</style>
```

## Array of Objects Examples

For all examples, we use the following interface:

```typescript
export interface PersonIf {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  ipAddress: string;
}
```

### Angular

#### Component Class (TypeScript)

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
    // Loading the data (in this example from a JSON file)
    this.http
      .get<PersonIf[]>("/assets/data/persons.json")
      .subscribe(this.onDataLoaded.bind(this));
  }

  private onDataLoaded(rows: PersonIf[]) {
    // Define the properties to be displayed as columns
    const properties = ["id", "firstName", "lastName", "email", "ipAddress"];

    // Create the table model with the object data
    this.tableModel = TableFactory.createTableModel({
      properties,
      rows,
      defaultRowHeights: this.tableOptions.defaultRowHeights
    });
  }
}
```

#### Template (HTML)

```html
<guiexpert-table
  [tableOptions]="tableOptions"
  [tableModel]="tableModel"
  *ngIf="tableModel"
  class="table-div"
></guiexpert-table>
```

#### CSS Styling

```css
.table-div {
  height: 500px;
  width: 100%;
}
```

### React

```tsx
import { useState, useEffect } from "react";
import { GuiexpertTable } from "@guiexpert/react-table";
import { TableOptions, TableFactory, ColumnDefIf } from "@guiexpert/table";

interface PersonIf {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  ipAddress: string;
}

export function ObjectTableComponent() {
  const [tableModel, setTableModel] = useState(null);
  const tableOptions = new TableOptions();

  useEffect(() => {
    // Loading the data (in this example from a JSON file)
    fetch("/assets/data/persons.json")
      .then(response => response.json())
      .then((rows: PersonIf[]) => {
        // Define the properties to be displayed as columns
        const properties = ["id", "firstName", "lastName", "email", "ipAddress"];

        // Create the table model with the object data
        const model = TableFactory.createTableModel({
          properties,
          rows,
          defaultRowHeights: {
            header: 34,
            body: 34,
            footer: 0
          }
        });

        setTableModel(model);
      });
  }, []);

  if (!tableModel) {
    return <div>Loading...</div>;
  }

  return (
    <GuiexpertTable
      tableModel={tableModel}
      tableOptions={tableOptions}
      className="table-div"
    />
  );
}
```

### Vue 3

```vue
<template>
  <div class="table-div">
    <guiexpert-table
      v-if="tableModel"
      :tableModel="tableModel"
      :tableOptions="tableOptions"
      @mouseClicked="onMouseClicked($event)"
    ></guiexpert-table>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { GuiexpertTable } from "@guiexpert/vue3-table";
import { GeMouseEvent, TableOptions, TableFactory } from "@guiexpert/table";

interface PersonIf {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  ipAddress: string;
}

const tableModel = ref(null);
const tableOptions = new TableOptions();

function onMouseClicked(evt: GeMouseEvent) {
  console.info("demo onMouseClicked", evt);
}

onMounted(() => {
  // Loading the data (in this example from a JSON file)
  fetch("/assets/data/persons.json")
    .then(response => response.json())
    .then((rows: PersonIf[]) => {
      // Define the properties to be displayed as columns
      const properties = ["id", "firstName", "lastName", "email", "ipAddress"];

      // Create the table model with the object data
      tableModel.value = TableFactory.createTableModel({
        properties,
        rows,
        defaultRowHeights: {
          header: 34,
          body: 34,
          footer: 0
        }
      });
    });
});
</script>

<style>
.table-div {
  height: 500px;
  width: 100%;
}
</style>
```

### Svelte

```svelte
<script lang="ts">
  import { onMount } from "svelte";
  import { GuiexpertTable } from "@guiexpert/svelte-table";
  import { TableOptions, TableFactory } from "@guiexpert/table";

  interface PersonIf {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    ipAddress: string;
  }

  let tableModel = null;
  const tableOptions = new TableOptions();

  onMount(async () => {
    // Loading the data (in this example from a JSON file)
    const response = await fetch("/assets/data/persons.json");
    const rows = await response.json();

    // Define the properties to be displayed as columns
    const properties = ["id", "firstName", "lastName", "email", "ipAddress"];

    // Create the table model with the object data
    tableModel = TableFactory.createTableModel({
      properties,
      rows,
      defaultRowHeights: {
        header: 34,
        body: 34,
        footer: 0
      }
    });
  });
</script>

{#if tableModel}
  <div class="table-div">
    <GuiexpertTable {tableModel} {tableOptions} />
  </div>
{:else}
  <div>Loading...</div>
{/if}

<style>
  .table-div {
    height: 500px;
    width: 100%;
  }
</style>
```

### Web Component (Plain JS/TS)

```html
<div class="table-div">
  <guiexpert-table id="table"></guiexpert-table>
</div>

<script type="module">
  import { TableApi } from "@guiexpert/webcomponent-table";
  import { TableFactory, TableOptions } from "@guiexpert/table";

  // Loading the data (in this example from a JSON file)
  async function initTable() {
    const response = await fetch("/assets/data/persons.json");
    const rows = await response.json();

    // Define the properties to be displayed as columns
    const properties = ["id", "firstName", "lastName", "email", "ipAddress"];

    // Create the table model with the object data
    const tableModel = TableFactory.createTableModel({
      properties,
      rows,
      defaultRowHeights: {
        header: 34,
        body: 34,
        footer: 0
      }
    });

    // Initialize the table
    const tableElement = document.getElementById("table");
    const api = new TableApi(tableElement);
    api.setTableModel(tableModel);
    api.setTableOptions(new TableOptions());
  }

  initTable();
</script>

<style>
  .table-div {
    height: 500px;
    width: 100%;
  }
</style>
```

## Features and Customization Options

The GuiExpert Table libraries offer numerous features and customization options that are available in all framework implementations.

### TableOptions

The tables can be customized with various options:

```typescript
const tableOptions: TableOptionsIf = {
  ...new TableOptions(),

  // Shows a hover column
  hoverColumnVisible: true,

  // Defines row heights for different table areas
  defaultRowHeights: {
    header: 40,
    body: 30,
    footer: 40
  },

  // Enables row selection
  selectionMode: 'single', // or 'multi', 'none'

  // Enables sorting
  sortable: true,

  // Enables filtering
  filterable: true,

  // Adjusts column width to content
  autoSizeColumns: true,

  // Fixed columns
  fixedLeftColumnCount: 1, // Number of fixed columns on the left
  fixedRightColumnCount: 1, // Number of fixed columns on the right

  // Enables the ability to move columns
  columnsDraggable: true,

  // Enables the ability to resize column widths
  columnsResizable: true,

  // Enables row hover effect
  rowSelectionMode: 'single', // or 'multi', 'none'

  // Enables column hover effect
  columnSelectionMode: 'single', // or 'multi', 'none'

  // Enables cell hover effect
  cellSelectionMode: 'single', // or 'multi', 'none'

  // Enables virtual scrolling (for large data sets)
  virtualScroll: true,

  // Enables zebra stripes for rows
  showZebraRows: true,

  // Enables horizontal lines
  showHorizontalLines: true,

  // Enables vertical lines
  showVerticalLines: true,

  // Enables header
  headerVisible: true,

  // Enables footer
  footerVisible: true
};
```

### Custom Cell Renderers

You can implement custom cell renderers to customize the display of cells:

```typescript
import { ColumnDefIf, TableFactory } from "@guiexpert/table";

// Custom column definition
const columnDefs: ColumnDefIf[] = [
  {
    property: "id",
    headerLabel: "ID",
    width: 80
  },
  {
    property: "firstName",
    headerLabel: "First Name",
    width: 150
  },
  {
    property: "lastName",
    headerLabel: "Last Name",
    width: 150,
    // Custom renderer for this column
    renderer: (value, rowIndex, columnIndex) => {
      return `<strong>${value}</strong>`;
    }
  },
  {
    property: "email",
    headerLabel: "Email",
    width: 200,
    // Custom renderer with HTML link
    renderer: (value) => {
      return `<a href="mailto:${value}">${value}</a>`;
    }
  },
  {
    property: "gender",
    headerLabel: "Gender",
    width: 100,
    // Custom renderer with conditions
    renderer: (value) => {
      if (value === 'Male') {
        return '♂️';
      } else if (value === 'Female') {
        return '♀️';
      }
      return value;
    }
  }
];

// Creating the table model with custom column definitions
const tableModel = TableFactory.createTableModel({
  rows: data,
  columnDefs,
  defaultRowHeights: {
    header: 34,
    body: 34,
    footer: 0
  }
});
```

### Framework-specific Component Renderers

For more complex cells, you can also use framework-specific components as renderers:

#### Angular

```typescript
import { ComponentRendererWrapper } from "@guiexpert/angular-table";
import { GenderRendererComponent } from "./gender-renderer.component";

// Applying the component renderer to a column
columnDefs[4].renderer = new ComponentRendererWrapper(GenderRendererComponent);
```

#### React

```typescript
import { ComponentRendererWrapper } from "@guiexpert/react-table";
import GenderRendererComponent from "./GenderRendererComponent";

// Applying the component renderer to a column
columnDefs[4].renderer = new ComponentRendererWrapper(GenderRendererComponent);
```

### Sorting

The table supports column sorting:

```typescript
const tableOptions = {
  ...new TableOptions(),
  sortable: true
};

// Custom sort function for a column
columnDefs[2].sortComparator = (a, b) => {
  return a.localeCompare(b); // For strings
};
```

### Filtering

The table supports data filtering:

```typescript
const tableOptions = {
  ...new TableOptions(),
  filterable: true
};

// Custom filter function for a column
columnDefs[2].filterPredicate = (value, filter) => {
  return value.toLowerCase().includes(filter.toLowerCase());
};
```

### Event Handling

You can react to various table events:

#### Angular

```html
<guiexpert-table
  [tableModel]="tableModel"
  [tableOptions]="tableOptions"
  (cellClick)="onCellClick($event)"
  (selectionChanged)="onSelectionChanged($event)"
  (sortChanged)="onSortChanged($event)"
  (filterChanged)="onFilterChanged($event)"
  (columnMoved)="onColumnMoved($event)"
  (columnResized)="onColumnResized($event)"
  *ngIf="tableModel"
  class="table-div"
></guiexpert-table>
```

#### React

```tsx
<GuiexpertTable
  tableModel={tableModel}
  tableOptions={tableOptions}
  mouseClicked={onCellClick}
  selectionChanged={onSelectionChanged}
  sortChanged={onSortChanged}
  filterChanged={onFilterChanged}
  columnMoved={onColumnMoved}
  columnResized={onColumnResized}
  className="table-div"
/>
```

#### Vue 3

```vue
<guiexpert-table
  :tableModel="tableModel"
  :tableOptions="tableOptions"
  @mouseClicked="onCellClick($event)"
  @selectionChanged="onSelectionChanged($event)"
  @sortChanged="onSortChanged($event)"
  @filterChanged="onFilterChanged($event)"
  @columnMoved="onColumnMoved($event)"
  @columnResized="onColumnResized($event)"
></guiexpert-table>
```

### Additional Features

#### Fixed Columns and Rows

```typescript
const tableOptions = {
  ...new TableOptions(),
  fixedLeftColumnCount: 2, // Fixes the first 2 columns on the left
  fixedRightColumnCount: 1, // Fixes the last column on the right
};

// Creating the table model with fixed rows
const tableModel = TableFactory.createTableModel({
  rows: data,
  columnDefs,
  defaultRowHeights: {
    header: 34, // Fixed header
    body: 34,
    footer: 34 // Fixed footer
  }
});
```

#### Grouping

```typescript
// Grouping of rows
const tableModel = TableFactory.createTableModel({
  rows: data,
  columnDefs,
  groupedColumnIndex: 1, // Groups by the second column
  defaultRowHeights: {
    header: 34,
    body: 34,
    footer: 0
  }
});
```

#### Tree Structure

```typescript
// Tree structure for hierarchical data
const tableModel = TableFactory.createTreeTableModel({
  rows: treeData,
  columnDefs,
  defaultRowHeights: {
    header: 34,
    body: 34,
    footer: 0
  }
});
```

#### Keyboard Navigation

The table supports keyboard navigation:

- Arrow keys: Navigation between cells
- Enter: Selection of a cell
- Tab: Navigation to the next cell
- Shift+Tab: Navigation to the previous cell
- Ctrl+A: Select all cells (if allowed)

#### Drag & Drop

```typescript
const tableOptions = {
  ...new TableOptions(),
  columnsDraggable: true, // Allows moving columns
  rowsDraggable: true // Allows moving rows
};
```

#### Context Menu

```typescript
const tableOptions = {
  ...new TableOptions(),
  contextMenuRenderer: (event, api) => {
    // Custom context menu
    return [
      { label: 'Option 1', action: () => console.log('Option 1 clicked') },
      { label: 'Option 2', action: () => console.log('Option 2 clicked') }
    ];
  }
};
```

## Showcases und Beispiele

Für weitere Beispiele und Demos besuchen Sie:

- [GuiExpert Showcase](https://gui.expert/showcase/): Interaktive Demos mit verschiedenen Features
- [GitHub Repository](https://github.com/guiexperttable): Vollständiger Quellcode und Beispiele

## Fazit

Die `@guiexpert/table` Bibliothek und ihre Framework-spezifischen Implementierungen bieten eine flexible und leistungsstarke Lösung für die Darstellung von Tabellendaten in Web-Anwendungen. Sie unterstützen sowohl einfache Arrays als auch komplexe Objektstrukturen und bieten zahlreiche Anpassungsmöglichkeiten für verschiedene Anwendungsfälle.

Mit Unterstützung für alle gängigen Web-Frameworks (Angular, React, Preact, SolidJS, Svelte, Vue 3) sowie Plain JS/TS über Web Components ist die Bibliothek vielseitig einsetzbar und bietet eine konsistente API über alle Plattformen hinweg.
