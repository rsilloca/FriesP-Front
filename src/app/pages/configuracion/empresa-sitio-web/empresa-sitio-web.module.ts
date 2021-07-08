import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaSitioWebRoutingModule } from './empresa-sitio-web-routing.module';
import { EmpresaSitioWebComponent } from './empresa-sitio-web.component';


@NgModule({
  declarations: [EmpresaSitioWebComponent],
  imports: [
    CommonModule,
    EmpresaSitioWebRoutingModule
  ]
})
export class EmpresaSitioWebModule { }
