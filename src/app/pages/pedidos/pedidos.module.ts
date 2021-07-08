import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PedidosComponent],
  imports: [
    CommonModule,
    PedidosRoutingModule,

    // Angular Material
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PedidosModule { }
