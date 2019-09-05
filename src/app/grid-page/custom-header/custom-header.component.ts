import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent {
  private params: any;
  private checkState: Number = 0;
  private count;
  private totalCount;

  agInit(params) {
    this.params = params;
    this.count = this.params.api.getSelectedRows().length;
    this.params.api.addEventListener('rowSelected', this.onRowSelected.bind(this));
    this.params.api.addEventListener('modelUpdated', this.onModelUpdated.bind(this));
  }

  onChangeState() {
    if ((this.checkState == 0) || (this.checkState == 2)) {
      this.params.api.selectAll();
      this.checkState = 1;
    } else {
      this.params.api.deselectAll();
      this.checkState = 0;
    }
  }

  refreshCheckBox() {
    if (this.totalCount == this.count) {
      this.checkState = 1;
      return 0;
    } else if (this.count == 0) {
        this.checkState = 0;
        return 0;
    } else if (this.count < this.totalCount) {
        this.checkState = 2;
        return 0;
    }
  }

  onModelUpdated() {
    this.totalCount = this.params.api.getModel().getRowCount();
    this.refreshCheckBox();
  }

  onRowSelected() {
    this.count = this.params.api.getSelectedRows().length;
    this.refreshCheckBox();
  }
}
