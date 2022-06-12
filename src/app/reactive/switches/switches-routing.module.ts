import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchesComponent } from './switches.component';

const routes: Routes = [
  { path: '', component : SwitchesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchesRoutingModule { }
