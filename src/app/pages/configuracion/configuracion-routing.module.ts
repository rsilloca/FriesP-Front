import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'empresa-sitio-web',
    loadChildren: () => import('./empresa-sitio-web/empresa-sitio-web.module').then(m => m.EmpresaSitioWebModule)
  },
  {
    path: 'metodos-pago',
    loadChildren: () => import('./metodos-pago/metodos-pago.module').then(m => m.MetodosPagoModule)
  },
  {
    path: 'descuentos',
    loadChildren: () => import('./descuentos/descuentos.module').then(m => m.DescuentosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
