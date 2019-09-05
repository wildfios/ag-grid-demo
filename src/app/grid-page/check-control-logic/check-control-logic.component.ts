import { Component } from '@angular/core';
import { IStatusPanelParams } from 'ag-grid-community';

@Component({
  selector: 'app-check-control-logic',
  templateUrl: './check-control-logic.component.html',
  styleUrls: ['./check-control-logic.component.css']
})
export class CheckControlLogicComponent {
  private gridColumnApi;
  private visibleFlag = true;

  agInit(params: IStatusPanelParams) {
    this.gridColumnApi = params.columnApi;
  }

  onClick() {
    this.visibleFlag = !this.visibleFlag;
    this.gridColumnApi.columnController.setColumnVisible('checkbox', this.visibleFlag);
  }
}
