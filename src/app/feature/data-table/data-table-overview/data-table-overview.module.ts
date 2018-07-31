import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableOverviewComponent, BasicUsageComponent } from './index';

import { DataTableOverviewRoutingModule } from './data-table-overview-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table overview module.
 * @class DataTableOverviewModule
 */
@NgModule({
  declarations: [
    DataTableOverviewComponent,
    BasicUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableOverviewRoutingModule
  ],
  providers: []
})
export class DataTableOverviewModule {
}
