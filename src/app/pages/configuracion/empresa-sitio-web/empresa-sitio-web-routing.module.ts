import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaSitioWebComponent } from './empresa-sitio-web.component';


const routes: Routes = [
  {
    path: '',
    component: EmpresaSitioWebComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaSitioWebRoutingModule { }
