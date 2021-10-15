import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players/players.component';
import { RosaRoutingModule } from './rosa-routing.module';

@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    RosaRoutingModule
  ]
})
export class RosaModule { }
