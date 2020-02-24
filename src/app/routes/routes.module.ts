import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, RoutesRoutingModule],
})
export class RoutesModule {
}
