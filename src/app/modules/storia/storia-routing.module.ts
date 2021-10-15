import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoriaComponent } from './storia/storia.component';

const routes: Routes = [
    {path: 'storia', component: StoriaComponent}
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class StoriaRoutingModule { }