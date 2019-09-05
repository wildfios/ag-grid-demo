import { Component } from '@angular/core';
import 'ag-grid-enterprise';
import { GridOptions, GridApi, ColumnApi } from 'ag-grid-community';

import { StatusBarCountersComponent } from './status-bar-counters/status-bar-counters.component';
import { CheckControlLogicComponent } from './check-control-logic/check-control-logic.component';
import { DatatService } from '../services/data.service'

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.css']
})
export class GridPageComponent {
  private gridOptions: GridOptions;
  private gridApi : GridApi;
  private gridColumnApi: ColumnApi;
  private frameworkComponents;
  private statusBar;
  private dataObj = [];
  private columnDefs = [
    {
      headerCheckboxSelection: true,
      headerName: 'Select/Unselect All',
      field: 'checkbox',
      id: 'checkboxes',
      checkboxSelection: true,
      width: 100,
    },
    {
      headerName: 'Thumbnails',
      field: 'thumbnails',
      width: 100,
      autoHeight: true,
      cellRenderer: params => {
        return '<img height="80" src=' + params.value + '>'
      }
    },
    {
      headerName: 'Title',
      field: 'title',
    },
    {
      headerName: 'Description',
      field: 'description',
    },
    {
      headerName: 'Published At',
      field: 'publishedAt',
    },
    {
      headerName: 'Video URL',
      field: 'url',
      cellRenderer: params => {
        return '<a href="' + params.value + '" target="_blank">' + params.value + '</a>'
      }
    },
  ];
  
  getRowHeight(params) {
    return 80;
  }

  constructor(private dataService: DatatService) {
    this.gridOptions = <GridOptions>{
      rowSelection: 'multiple',
      rowMultiSelectWithClick: true,
      columnDefs: this.columnDefs,
      rowData: this.dataObj
    };
    this.frameworkComponents = { 
        statusBarComponent: StatusBarCountersComponent, 
        checkControlLogicComponent: CheckControlLogicComponent
      };
    this.statusBar = {
      statusPanels: [
        { statusPanel: 'checkControlLogicComponent' },
        { statusPanel: 'statusBarComponent' }
      ]
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.fetchGrid();
  }
  
  fetchGrid() {
    this.dataService.getDataList().subscribe((data: Object[]) =>{
      if ('items' in data) {
        let itemList : any[] = data['items'];
        itemList.forEach(res => {
          this.dataObj.push({
            thumbnails: res.snippet.thumbnails.default.url,
            title: res.snippet.title,
            description: res.snippet.description,
            publishedAt: res.snippet.publishedAt,
            url: 'https://www.youtube.com/watch?v='+res.id.videoId,
          });
        })
        this.gridApi.setRowData(this.dataObj);
        this.gridApi.sizeColumnsToFit();
      }
    },
    error => {
      alert('Can not fetch data');
    })
  }

  onResize(event) {
    this.gridApi.sizeColumnsToFit();
  }
}
