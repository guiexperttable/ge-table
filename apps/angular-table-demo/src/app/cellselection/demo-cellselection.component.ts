import { ChangeDetectorRef, Component } from '@angular/core';
import { SelectionMode, SelectionModel, SelectionType, TableApi, TableModelIf, TableOptionsIf } from '@guiexpert/table';
import { createManyTypesModelAndOptions } from '@guiexpert/demo-table-models';


@Component({
  selector: 'demo-cellselection',
  templateUrl: './demo-cellselection.component.html',
  styleUrls: ['./demo-cellselection.component.css']
})
export class DemoCellselectionComponent {


  selectionTypes: SelectionType[] = ["none" , "cell" , "row" , "column" , "range"];

  selectionType: SelectionType = this.selectionTypes[2];
  selectionMode: SelectionMode = "single"

  tableOptions: TableOptionsIf;
  tableModel?: TableModelIf;
  tableApi: TableApi | undefined;


  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {
    const { tableModel, tableOptions } = createManyTypesModelAndOptions(new SelectionModel(this.selectionType, this.selectionMode));
    this.tableModel = tableModel;
    this.tableOptions = tableOptions;
  }


  onTableReady($event: TableApi) {
    this.tableApi = $event;
  }

  clearSelection(){
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



  onSelectionParameterChange(){
    console.info('selectionType:' + this.selectionType + ',  ' + 'selectionMode:' + this.selectionMode);

    const sm = new SelectionModel(this.selectionType, this.selectionMode);
    if (this.tableApi) {
      this.tableApi.setSelectionModel(sm);
    }

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



}

