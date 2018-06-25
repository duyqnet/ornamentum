import { Component, Input, TemplateRef } from '@angular/core';

import { DataFetchMode } from '../../models/data-fetch-mode.enum';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';

@Component({
  selector: 'ng-data-table-no-data-body',
  templateUrl: './data-table-no-data-body.component.html'
})
export class DataTableNoDataBodyComponent {
  @Input()
  public noRecordsTemplate: TemplateRef<any>;

  constructor(public config: DataTableConfigService,
              public eventStateService: DataTableEventStateService) {
  }

  public resetFilters(): void {
    this.eventStateService.dataFetchStream.emit(DataFetchMode.HARD_RELOAD);
  }

  public get showDefaultNoDataTemplate(): boolean {
    return !!(!this.noRecordsTemplate && this.config.translations.noDataMessageHeader && this.config.translations.noDataMessageBody);
  }
}
