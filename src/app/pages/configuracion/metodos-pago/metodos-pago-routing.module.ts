import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetodosPagoComponent } from './metodos-pago.component';


const routes: Routes = [
  {
    path: '',
    component: MetodosPagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetodosPagoRoutingModule { }
