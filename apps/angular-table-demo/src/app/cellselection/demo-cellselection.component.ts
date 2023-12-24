import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import {
  SelectionMode,
  SelectionModel,
  SelectionType,
  ShortcutActionIdMapping,
  TableApi,
  TableModelIf,
  TableOptionsIf
} from '@guiexpert/table';
import { createManyTypesModelAndOptions } from '@guiexpert/demo-table-models';


@Component({
  selector: 'demo-cellselection',
  templateUrl: './demo-cellselection.component.html',
  styleUrls: ['./demo-cellselection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCellselectionComponent {


  selectionTypes: SelectionType[] = ['none', 'cell', 'row', 'column'];

  selectionType: SelectionType = this.selectionTypes[2];
  selectionMode: SelectionMode = 'multi';

  tableOptions: TableOptionsIf;
  tableModel?: TableModelIf;
  tableApi: TableApi | undefined;
  shortcutMapping: ShortcutActionIdMapping | undefined;


  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly zone: NgZone
  ) {
    const { tableModel, tableOptions } = createManyTypesModelAndOptions(
      new SelectionModel(this.selectionType, this.selectionMode),
      75,
      true
    );
    this.tableModel = tableModel;
    this.tableOptions = tableOptions;
  }


  onTableReady($event: TableApi) {
    this.tableApi = $event;
  }

  clearSelection() {
    // Possibility 1:
    // if (this.tableOptions.getSelectionModel) {
    //   const selectionModel = this.tableOptions.getSelectionModel();
    //   if (selectionModel) {
    //     selectionModel.clear();
    //     if (this.tableApi) {
    //       this.tableApi.repaint();
    //     }
    //   }
    // }

    // Possibility 2:
    if (this.tableApi) {
      this.tableApi.clearSelection();
    }
  }


  onSelectionParameterChange() {
    // Possibility 1:
    const sm = new SelectionModel(this.selectionType, this.selectionMode);
    if (this.tableApi) {
      this.tableApi.setSelectionModel(sm);
    }

    // Possibility 2:
    // // Destroying the component:
    // this.tableModel = undefined;
    // this.cdr.detectChanges();
    //
    // // Re-creation of the component:
    // Promise.resolve().then(()=>{
    //   console.info('re create...')
    //   const { tableModel, tableOptions } = createManyTypesModelAndOptions(new SelectionModel(this.selectionType, this.selectionMode));
    //   this.tableModel = tableModel;
    //   this.tableOptions = tableOptions;
    // });
  }


  showShortcuts() {
    if (this.tableApi) {
      this.shortcutMapping = this.tableApi.getShortcutActionMapping();
      (document.querySelector('.shortcuts-dlg') as HTMLDialogElement).show();
    }
  }

  closeDlg() {
    (document.querySelector('.shortcuts-dlg') as HTMLDialogElement).close();
  }
}

