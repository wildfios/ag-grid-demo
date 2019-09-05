import { Component } from '@angular/core';
import { IStatusPanelParams } from 'ag-grid-community';

@Component({
  selector: 'app-status-bar-counters',
  templateUrl: './status-bar-counters.component.html',
  styleUrls: ['./status-bar-counters.component.css']
})
export class StatusBarCountersComponent {
  private params: IStatusPanelParams;
  private count: Number;
  private totalCount: Number;

  agInit(params: IStatusPanelParams) {
      this.params = params;
      this.count = this.params.api.getSelectedRows().length;
      this.params.api.addEventListener('rowSelected', this.onRowSelected.bind(this));
      this.params.api.addEventListener('modelUpdated', this.onModelUpdated.bind(this));
  }

  onModelUpdated() {
    this.totalCount = this.params.api.getModel().getRowCount();
  }

  onRowSelected() {
    this.count = this.params.api.getSelectedRows().length;
  }
}
