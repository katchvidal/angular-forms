import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicosRoutingModule } from './basicos-routing.module';
import { BasicosComponent } from './basicos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BasicosRoutingModule
  ]
})
export class BasicosModule { }
