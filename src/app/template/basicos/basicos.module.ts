import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicosRoutingModule } from './basicos-routing.module';
import { BasicosComponent } from './basicos.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from '../directivas/custom-min.directive';


@NgModule({
  declarations: [
    BasicosComponent,
    CustomMinDirective,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BasicosRoutingModule
  ]
})
export class BasicosModule { }
