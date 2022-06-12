import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinamicosComponent } from './dinamicos.component';

const routes: Routes = [
  { path: '', component : DinamicosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinamicosRoutingModule { }
