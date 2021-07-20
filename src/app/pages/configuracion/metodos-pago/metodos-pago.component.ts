import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearEditarMetodoPagoComponent } from './crear-editar-metodo-pago/crear-editar-metodo-pago.component';

@Component({
  selector: 'fury-metodos-pago',
  templateUrl: './metodos-pago.component.html',
  styleUrls: ['./metodos-pago.component.scss']
})
export class MetodosPagoComponent implements OnInit {

  tiposMetodoPago = [
    { id: 1, nombre: 'Contra entrega' },
    { id: 2, nombre: 'Transferencia bancaria' },
    { id: 3, nombre: 'Pago por aplicación' },
    { id: 4, nombre: 'Pasarela de Pago' },
  ];

  estados = [
    { id: 1, nombre: 'ACTIVO' },
    { id: 2, nombre: 'INACTIVO' }
  ];

  displayedColumns: string[] = ['N°', 'Nombre', 'Tipo', 'Estado', 'Acciones'];
  dataSource = [
    { nombre: 'Contra entrega', tipo: 'Contra entrega', estado: 'ACTIVO' },
    { nombre: 'BCP', tipo: 'Transferencia bancaria', estado: 'ACTIVO' },
    { nombre: 'BBVA', tipo: 'Transferencia bancaria', estado: 'ACTIVO' },
    { nombre: 'Yape', tipo: 'Pago por aplicación', estado: 'ACTIVO' },
    { nombre: 'Mercado Pago', tipo: 'Pasarela de Pago', estado: 'ACTIVO' }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  crearEditarMetodoPago(metodoPago?: any) {
    this.dialog.open(CrearEditarMetodoPagoComponent, {
      width: '27rem',
      data: metodoPago
    });
  }

  activarDesactivarMetodoPago(metodoPago: any) {

  }

}
