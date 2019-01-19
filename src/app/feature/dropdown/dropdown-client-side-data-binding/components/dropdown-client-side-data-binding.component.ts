import { Component } from '@angular/core';

import {
  clientSideDataBindingWithDataSourceUsage,
  clientSideDataBindingWithItemsUsage,
  demoSnippet
} from './dropdown-client-side-data-binding.list';

@Component({
  selector: 'app-dropdown-client-side-data-binding-component',
  templateUrl: './dropdown-client-side-data-binding.component.html',
  styleUrls: ['./dropdown-client-side-data-binding.component.scss']
})
export class DropdownClientSideDataBindingComponent {
  public clientSideDataBindingWithItemsUsage = clientSideDataBindingWithItemsUsage;
  public clientSideDataBindingWithDataSourceUsage = clientSideDataBindingWithDataSourceUsage;
  public demoSnippet = demoSnippet;
}
