import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', loadChildren: () => import('./basicos/basicos.module').then(m => m.BasicosModule) },
      { path: 'dinamicos', loadChildren: () => import('./dinamicos/dinamicos.module').then(m => m.DinamicosModule) },
      { path: 'switches', loadChildren: () => import('./switches/switches.module').then(m => m.SwitchesModule) },
      { path: '**', redirectTo: 'basicos' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
