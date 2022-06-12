import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinamicosRoutingModule } from './dinamicos-routing.module';
import { DinamicosComponent } from './dinamicos.component';


@NgModule({
  declarations: [
    DinamicosComponent
  ],
  imports: [
    CommonModule,
    DinamicosRoutingModule
  ]
})
export class DinamicosModule { }
