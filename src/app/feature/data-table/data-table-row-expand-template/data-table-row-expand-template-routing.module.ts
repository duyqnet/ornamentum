import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableRowExpandTemplateComponent } from './index';

/**
 * Represent data table row expand template routes.
 * @type Routes
 */
const dataTableRowExpandTemplateRoutes: Routes = [
  {
    component: DataTableRowExpandTemplateComponent,
    path: ''
  }
];

/**
 * Data table row expand template  routing module.
 * @class DataTableRowExpandTemplateRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableRowExpandTemplateRoutes)]
})
export class DataTableRowExpandTemplateRoutingModule {
}
