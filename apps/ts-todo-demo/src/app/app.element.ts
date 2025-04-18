import './app.element.css';
import {
  AreaModelObjectArray,
  CheckboxBooleanPropertyCellRenderer,
  ColumnDef,
  ColumnDefIf,
  DateToLocaleDateCellRenderer,
  editInputPipeForNumber,
  EventCheckboxChangedHandler,
  EventListenerIf,
  SelectCellRenderer,
  SimpleDomService,
  Size,
  TableFactory,
  TableOptions,
  TableOptionsIf,
  TableScope,
  ValueLabel
} from '@guiexpert/table';
import { Todo } from './todo';
import { TodoIf } from './todo.if';

export class AppElement extends HTMLElement {


  private tableScope: TableScope | null = null;
  private bodyModel: AreaModelObjectArray<TodoIf> | null = null;

  private containerDiv: HTMLDivElement | null = null;
  private deleteButton: HTMLDivElement | null = null;
  private addButton: HTMLDivElement | null = null;
  private rowCountLabel: HTMLDivElement | null = null;


  connectedCallback() {
    this.innerHTML = this.getTemplateHtml();

    this.containerDiv = document.querySelector('.container-div') as HTMLDivElement;
    this.deleteButton = document.querySelector('.delete-btn') as HTMLDivElement;
    this.addButton = document.querySelector('.add-btn') as HTMLDivElement;
    this.rowCountLabel = document.querySelector('.rowcount-label') as HTMLDivElement;

    // Attach event listeners
    this.deleteButton.addEventListener('click', () => this.handleDelete());
    this.addButton.addEventListener('click', () => this.handleAdd());

    const columnDefs = this.getColumnDefinitions();
    const tableOptions = this.getTableOptions();
    const initialRows: TodoIf[] = this.getDefaultRows();

    const tableModel = TableFactory.createTableModel({
      rows: initialRows,
      columnDefs,
      tableOptions
    });

    const eventListener: EventListenerIf = new EventCheckboxChangedHandler(
      (_evt: any[]) => this.syncDeleteButtonLabel()
    );
    // Alternate:
    // const eventListener: EventListenerIf = new EventAdapter();
    // eventListener.onCheckboxChanged = () => this.syncDeleteButtonLabel();

    this.tableScope = new TableScope(
      this.containerDiv,
      tableModel,
      new SimpleDomService(),
      tableOptions,
      eventListener
    );

    this.tableScope.firstInit();
    this.bodyModel = this.tableScope.getApi().getTableModel().getBodyModel() as AreaModelObjectArray<TodoIf>;

    // Initial sync of buttons and labels
    this.syncDeleteButtonLabel();
    this.syncRowCountLabel();
  }

  private handleDelete(): void {
    if (confirm('Are you sure you want to delete?')) {
      const rows = this.bodyModel?.getAllRows() ?? [];
      const remainingRows = rows.filter(row => !row.checked);
      this.bodyModel?.setRows(remainingRows);
      this.tableScope?.repaintHard();
      this.syncDeleteButtonLabel();
      this.syncRowCountLabel();
    }
  }

  private handleAdd(): void {
    const rows = this.bodyModel?.getAllRows() ?? [];
    const nextId = 1 + rows.reduce((maxId, row) => Math.max(maxId, row.id), 0);
    const newTodo = new Todo(false, nextId, `Title ${nextId}`, 'Lorem ipsum', 0, new Date(), 'medium');
    this.bodyModel?.setRows([newTodo, ...rows]);
    this.tableScope?.repaintHard();
    this.syncRowCountLabel();
  }

  private syncDeleteButtonLabel(): void {
    const checkedCount = this.bodyModel?.getAllRows().filter(row => row.checked).length;
    if (this.deleteButton) {
      this.deleteButton.innerText = `Delete (${checkedCount})`;
    }
  }

  private syncRowCountLabel(): void {
    const count = this.bodyModel?.getAllRows().length;
    if (this.rowCountLabel) {
      this.rowCountLabel.innerText = `Rows: ${count}`;
    }
  }

  private getTemplateHtml(): string {
    return `
      <div class="button-div">
        <button class="add-btn">Add</button>
        <button class="delete-btn">Delete</button>
        <label class="rowcount-label"></label>
      </div>
      <div class="container-div"></div>`;
  }

  private getColumnDefinitions(): ColumnDefIf[] {
    const px50 = new Size(50, 'px');
    const px200 = new Size(200, 'px');

    const defs: ColumnDefIf[] = [
      ColumnDef.create({
        property: 'checked',
        headerLabel: ' ',
        width: px50,
        bodyRenderer: new CheckboxBooleanPropertyCellRenderer<TodoIf>('checked')
      }),
      new ColumnDef('id', 'ID', px50),
      ColumnDef.create({ property: 'title', headerLabel: 'Title', width: px200, editable: () => true }),
      ColumnDef.create({ property: 'description', headerLabel: 'Description', width: px200, editable: () => true }),
      ColumnDef.create({
        property: 'flagId',
        headerLabel: 'Flag',
        width: px200,
        editable: () => true,
        editInputPipe: editInputPipeForNumber
      }),
      ColumnDef.create({
        property: 'dueDate',
        headerLabel: 'Due Date',
        width: px200,
        editable: () => true,
        bodyRenderer: new DateToLocaleDateCellRenderer()
      }),
      ColumnDef.create({
        property: 'priority',
        headerLabel: 'Priority',
        width: px200,
        editable: () => true,
        getEditRenderer: () => new SelectCellRenderer([
          new ValueLabel('low', 'Low'),
          new ValueLabel('medium', 'Medium'),
          new ValueLabel('high', 'High'),
          new ValueLabel('urgent', 'Urgent')
        ])
      })
    ];

    defs.forEach(def => {
      def.sortable = () => true;
      def.sortIconVisible = () => true;
    });

    return defs;
  }

  private getTableOptions(): TableOptionsIf {
    return {
      ...new TableOptions(),
      hoverColumnVisible: false,
      defaultRowHeights: {
        header: 34,
        body: 34,
        footer: 0
      }
    };
  }

  private getDefaultRows(): TodoIf[] {
    return [
      new Todo(false, 1, 'Dentist Appointment', ':-(', 12, new Date(), 'medium'),
      new Todo(true, 2, 'Grocery Shopping', 'Buy milk, eggs, and bread', 24, new Date(), 'high'),
      new Todo(false, 3, 'Team Meeting', 'Discuss project progress', 36, new Date(), 'low'),
      new Todo(true, 4, 'Workout Session', 'Leg day at the gym', 48, new Date(), 'medium'),
      new Todo(false, 5, 'Call Mom', 'Weekly check-in call :)', 60, new Date(), 'high'),
      new Todo(false, 6, 'Pay Bills', 'Electricity and internet bills', 72, new Date(), 'urgent'),
      new Todo(true, 7, 'Doctor Checkup', 'Annual health checkup', 84, new Date(), 'medium'),
      new Todo(false, 8, 'Read a Book', 'Finish reading the current novel', 96, new Date(), 'low'),
      new Todo(true, 9, 'Office Presentation', 'Prepare slides for client meeting', 108, new Date(), 'urgent'),
      new Todo(false, 10, 'Plan Vacation', 'Research and book tickets', 120, new Date(), 'medium')
    ];
  }
}


customElements.define('ts-todo-demo-root', AppElement);
