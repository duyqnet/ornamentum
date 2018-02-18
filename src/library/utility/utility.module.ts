import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickOutsideDirective } from './directives/click-outside.directive';
import { InitDirective } from './directives/init.directive';

import { PixelConverterPipe } from './pipes/pixel-converter.pipe';

import { UtilityConfigService } from './services/utility-config.service';
import { DragAndDropService } from './services/drag-and-drop.service';
import { GlobalRefService } from './services/global-ref.service';
import { PopoverComponentLoaderFactoryService } from './services/popover-component-loader-factory.service';

const DIRECTIVES = [
  ClickOutsideDirective,
  InitDirective
];

const PIPES = [
  PixelConverterPipe
];

const PROVIDERS = [
  DragAndDropService,
  GlobalRefService,
  PopoverComponentLoaderFactoryService
];

/**
 * Module representing utility components.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...DIRECTIVES,
    ...PIPES
  ],
  providers: [
    ...PROVIDERS
  ],
  exports: [
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,
      providers: [UtilityConfigService]
    };
  }
}
