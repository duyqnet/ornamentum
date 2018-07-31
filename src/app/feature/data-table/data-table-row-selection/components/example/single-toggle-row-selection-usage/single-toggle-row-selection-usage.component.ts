import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-single-toggle-row-selection-usage',
  templateUrl: './single-toggle-row-selection-usage.component.html'
})
export class SingleToggleRowSelectionUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: DataTableExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.items = this.tableDataFetchService.getTableData();
  }
}
