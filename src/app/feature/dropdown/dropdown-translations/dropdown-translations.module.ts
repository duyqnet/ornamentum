import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import {
  DropdownTranslationsComponent,
  AdditionalTranslationsUsageComponent,
  TranslationsNoDataUsageComponent
} from './index';

import { DropdownTranslationsRoutingModule } from './dropdown-translations-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown translations module.
 * @class DropdownTranslationsModule
 */
@NgModule({
  declarations: [
    DropdownTranslationsComponent,
    AdditionalTranslationsUsageComponent,
    TranslationsNoDataUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownTranslationsRoutingModule
  ],
  providers: []
})
export class DropdownTranslationsModule {
}
