import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchesRoutingModule } from './switches-routing.module';
import { SwitchesComponent } from './switches.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SwitchesRoutingModule
  ]
})
export class SwitchesModule { }
