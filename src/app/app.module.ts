import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridPageComponent } from './grid-page/grid-page.component';

import { AgGridModule } from 'ag-grid-angular';
import { StatusBarCountersComponent } from './grid-page/status-bar-counters/status-bar-counters.component';
import { CheckControlLogicComponent } from './grid-page/check-control-logic/check-control-logic.component';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { CustomHeaderComponent } from './grid-page/custom-header/custom-header.component';

@NgModule({
  declarations: [
    AppComponent,
    GridPageComponent,
    StatusBarCountersComponent,
    CheckControlLogicComponent,
    CustomHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([
      StatusBarCountersComponent,
      CheckControlLogicComponent,
      CustomHeaderComponent
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
