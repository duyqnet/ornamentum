import { Component, forwardRef, Inject, Input } from '@angular/core';

import { DataRow } from '../../models/data-row.model';

import { DataTableComponent } from '../data-table/data-table.component';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

/**
 * Data table body component.
 * @class DataTableBodyComponent
 */
@Component({
  exportAs: 'ngDataTableBody',
  selector: '[ngDataTableBody]',
  styleUrls: ['./data-table-body.component.scss'],
  templateUrl: './data-table-body.component.html'
})
export class DataTableBodyComponent {
  @Input()
  public columns: DataTableColumnComponent[];

  constructor(@Inject(forwardRef(() => DataTableComponent)) public dataTable: DataTableComponent,
              public config: DataTableConfigService,
              public dataStateService: DataTableDataStateService) {
  }

  /**
   * Get current page index.
   * @return {number} Page index.
   */
  public getDisplayIndex(dataRow: DataRow): number {
    if (this.config.pageable) {
      return this.config.offset + dataRow.index + 1;
    } else {
      return dataRow.index + 1;
    }
  }

  /**
   * Is odd row.
   * @param {DataRow} row Data row object.
   * @return {boolean} True if odd row.
   */
  public isOddRow(row: DataRow): boolean {
    return row.index % 2 === 0;
  }

  /**
   * Is even row
   * @param {DataRow} row Data row object.
   * @return {boolean} True if even row.
   */
  public isEvenRow(row: DataRow): boolean {
    return row.index % 2 === 1;
  }

  /**
   * Is odd substitute row
   * @param {number} index Row index.
   * @return {boolean} True if odd row.
   */
  public isOddSubstituteRow(index: number): boolean {
    return (index + this.dataStateService.substituteRows.length) % 2 === 0;
  }

  /**
   * Is even substitute row
   * @param {number} index Row index.
   * @return {boolean} True if even row.
   */
  public isEvenSubstituteRow(index: number): boolean {
    return (index + this.dataStateService.substituteRows.length) % 2 === 1;
  }

  /**
   * On row expand event handler.
   * @param {Event} $event Click event arguments.
   * @param {DataRow} dataRow Data row object.
   */
  public onRowExpand($event: Event, dataRow: DataRow): void {
    dataRow.expanded = !dataRow.expanded;
    dataRow.dataLoaded = true;
  }

  /**
   * On row initialize event handler.
   * @param dataRow Data table row.
   */
  public onRowInit(dataRow): void {
    this.dataTable.rowBind.emit(dataRow);
  }

  /**
   * On cell initialize event handler.
   * @param {DataTableColumnComponent} column Data table column component.
   * @param {DataRow} row Data table row.
   */
  public onCellInit(column: DataTableColumnComponent, row: DataRow): void {
    this.dataTable.cellBind.emit({
      column: column,
      row: row
    });
  }
}
