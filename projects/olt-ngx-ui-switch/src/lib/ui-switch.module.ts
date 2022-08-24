import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiSwitchModuleConfig } from './ui-switch.config';
import { UI_SWITCH_OPTIONS } from './ui-switch.token';
import { UiSwitchComponent } from './ui-switch/ui-switch.component';


@NgModule({
  declarations: [
    UiSwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UiSwitchComponent
  ]
})
export class OltUiSwitchModule {
  static forRoot(
    config: UiSwitchModuleConfig | null | undefined): ModuleWithProviders<OltUiSwitchModule> {
    return {
      ngModule: OltUiSwitchModule,
      providers: [{ provide: UI_SWITCH_OPTIONS, useValue: config || {} }],
    };
  }
}
