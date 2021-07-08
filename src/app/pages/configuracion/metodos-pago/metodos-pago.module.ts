import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetodosPagoRoutingModule } from './metodos-pago-routing.module';
import { MetodosPagoComponent } from './metodos-pago.component';


@NgModule({
  declarations: [MetodosPagoComponent],
  imports: [
    CommonModule,
    MetodosPagoRoutingModule
  ]
})
export class MetodosPagoModule { }
