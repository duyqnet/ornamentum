import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-data-table-column-selector',
  styleUrls: ['./data-table-column-selector.component.scss'],
  templateUrl: './data-table-column-selector.component.html'
})
export class DataTableColumnSelectorComponent {
  @Input()
  public props: any;
}
