import { Component } from '@angular/core';

import { dataLimitUsage} from './dropdown-limit.list';

@Component({
  selector: 'app-dropdown-limit-component',
  templateUrl: './dropdown-limit.component.html',
  styleUrls: ['./dropdown-limit.component.scss']
})
export class DropdownLimitComponent {
  public dataLimitUsage = dataLimitUsage;
}
