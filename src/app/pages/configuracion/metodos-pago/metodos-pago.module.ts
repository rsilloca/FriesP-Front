import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetodosPagoRoutingModule } from './metodos-pago-routing.module';
import { MetodosPagoComponent } from './metodos-pago.component';
import { CrearEditarMetodoPagoComponent } from './crear-editar-metodo-pago/crear-editar-metodo-pago.component';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MetodosPagoComponent, CrearEditarMetodoPagoComponent],
  imports: [
    CommonModule,
    MetodosPagoRoutingModule,

    // Angular Material
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MetodosPagoModule { }
