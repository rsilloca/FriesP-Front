import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'proveedores',
    loadChildren: () => import('./proveedores/proveedores.module').then(m => m.ProveedoresModule)
  },
  {
    path: 'movimientos',
    loadChildren: () => import('./movimientos/movimientos.module').then(m => m.MovimientosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KardexRoutingModule { }
