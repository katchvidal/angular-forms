import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : 'auth', children : [
    { path : '',  loadChildren : () => import('./pages/login/login.module').then(m => m.LoginModule )},
    { path : 'registro',  loadChildren : () => import('./pages/registro/registro.module').then(m => m.RegistroModule )},
    { path: '**', redirectTo: '/auth'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
