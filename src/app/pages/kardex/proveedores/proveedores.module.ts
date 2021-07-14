import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './proveedores.component';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProveedoresComponent],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    // Angular Material
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProveedoresModule { }
