import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicosRoutingModule } from './basicos-routing.module';
import { BasicosComponent } from './basicos.component';


@NgModule({
  declarations: [
    BasicosComponent
  ],
  imports: [
    CommonModule,
    BasicosRoutingModule
  ]
})
export class BasicosModule { }
