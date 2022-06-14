import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinamicosRoutingModule } from './dinamicos-routing.module';
import { DinamicosComponent } from './dinamicos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DinamicosComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DinamicosRoutingModule
  ]
})
export class DinamicosModule { }
