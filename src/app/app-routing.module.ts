import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridPageComponent } from './grid-page/grid-page.component';

import { AgGridModule } from "ag-grid-angular";

const routes: Routes = [
  { path: '', component: GridPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AgGridModule.withComponents([])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
