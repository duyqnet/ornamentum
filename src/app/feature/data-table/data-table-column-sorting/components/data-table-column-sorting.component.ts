import { Component } from '@angular/core';

import {
  columnSortingUsage,
  columnSortingUsageWithMultiColumnSortable,
  columnSortingUsageWithSortField,
  columnSortingUsageWithSortOrder,
  demoSnippet
} from './data-table-column-sorting.list';

@Component({
  selector: 'app-data-table-column-sorting-component',
  templateUrl: './data-table-column-sorting.component.html',
  styleUrls: ['./data-table-column-sorting.component.scss']
})
export class DataTableColumnSortingComponent {
  public columnSortingUsage = columnSortingUsage;
  public columnSortingUsageWithSortOrder = columnSortingUsageWithSortOrder;
  public columnSortingUsageWithSortField = columnSortingUsageWithSortField;
  public columnSortingUsageWithMultiColumnSortable = columnSortingUsageWithMultiColumnSortable;
  public demoSnippet = demoSnippet;
}
