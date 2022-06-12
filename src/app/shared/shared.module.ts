import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    SidemenuComponent,
  ]
})
export class SharedModule { }
