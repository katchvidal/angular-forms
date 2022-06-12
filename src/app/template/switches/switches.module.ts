import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchesRoutingModule } from './switches-routing.module';
import { SwitchesComponent } from './switches.component';


@NgModule({
  declarations: [
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    SwitchesRoutingModule
  ]
})
export class SwitchesModule { }
