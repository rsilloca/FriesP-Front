import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientosRoutingModule } from './movimientos-routing.module';
import { MovimientosComponent } from './movimientos.component';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MovimientosComponent],
  imports: [
    CommonModule,
    MovimientosRoutingModule,
    // Angular Material
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class MovimientosModule {}