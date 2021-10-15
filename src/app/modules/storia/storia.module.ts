import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriaComponent } from './storia/storia.component';
import { StoriaRoutingModule } from './storia-routing.module';

@NgModule({
  declarations: [
  
    StoriaComponent
  ],
  imports: [
    CommonModule,
    StoriaRoutingModule
  ]
})
export class StoriaModule { }
