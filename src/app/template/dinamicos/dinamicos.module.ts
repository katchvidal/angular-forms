import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinamicosRoutingModule } from './dinamicos-routing.module';
import { DinamicosComponent } from './dinamicos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DinamicosComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DinamicosRoutingModule
  ]
})
export class DinamicosModule { }
