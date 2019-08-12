import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableCellTemplateRoutingModule } from './data-table-cell-template-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { CellTemplateUsageComponent, DataTableCellTemplateComponent } from './index';
import { CellTemplateUsageAvatarComponent } from './components/example/cell-template-usage-avatar/cell-template-usage-avatar.component';

/**
 * Module class for containing data table cell template module.
 */
@NgModule({
  declarations: [CellTemplateUsageComponent, DataTableCellTemplateComponent, CellTemplateUsageAvatarComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableCellTemplateRoutingModule
  ],
  providers: []
})
export class DataTableCellTemplateModule {
}
