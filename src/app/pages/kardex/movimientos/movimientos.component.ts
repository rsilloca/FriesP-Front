import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fury-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {

  displayedColumns: string[] = ['nro', 'codigo', 'articulo', 'unidadmedida', 'minpermitido', 'maxpermitido', 'proveedor', 'accion'];
  dataSource = [
    { nro:'1', codigo: 'PH-0001', articulo: 'Papitas en Hojuela', unidadmedida: 'Kg.', minpermitido: 5, maxpermitido: 50, proveedor: 'PepePapaYMas', accion: '' },
    { nro:'2', codigo: 'PH-0002', articulo: 'Papitas al Hilo', unidadmedida: 'Kg.', minpermitido: 5, maxpermitido: 50, proveedor: 'Papo y Papa', accion: '' },
    { nro:'3', codigo: 'HS-0003', articulo: 'Habas Saladas', unidadmedida: 'Kg.', minpermitido: 5, maxpermitido: 50, proveedor: 'SnackDeliciososMary', accion: '' },
    { nro:'4', codigo: 'CH-0004', articulo: 'Chifles', unidadmedida: 'Kg.', minpermitido: 5, maxpermitido: 50, proveedor: 'Bocaditos Fernan', accion: '' },
    { nro:'5', codigo: 'MZ-0005', articulo: 'Maíz', unidadmedida: 'Kg.', minpermitido: 5, maxpermitido: 50, proveedor: 'SnackDeliciososMary', accion: '' },
    { nro:'6', codigo: 'MA-0006', articulo: 'Maní Acaramelado', unidadmedida: 'Kg.', minpermitido: 5, maxpermitido: 50, proveedor: 'SnackDeliciososMary', accion: '' },
    { nro:'7', codigo: 'MS-0007', articulo: 'Maní Salado', unidadmedida: 'Kg.', minpermitido: 5, maxpermitido: 50, proveedor: 'Bocaditos Fernan', accion: '' },
    { nro:'8', codigo: 'MC-0008', articulo: 'Maní con Pasas', unidadmedida: 'Kg.', minpermitido: 5, maxpermitido: 50, proveedor: 'Bocaditos Fernan', accion: '' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

