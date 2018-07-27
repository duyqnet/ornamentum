import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { CellTemplateUsageComponent, DataTableCellTemplateComponent } from './index';

import { DataTableCellTemplateRoutingModule } from './data-table-cell-template-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table cell template module.
 * @class DataTableCellTemplateModule
 */
@NgModule({
  declarations: [
    CellTemplateUsageComponent,
    DataTableCellTemplateComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableCellTemplateRoutingModule
  ],
  providers: []
})
export class DataTableCellTemplateModule {
}
