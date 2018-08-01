import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-responsive-conf-without-width-height-usage',
  templateUrl: './responsive-conf-without-width-height-usage.component.html'
})
export class ResponsiveConfWithoutWidthHeightUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
