import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fury-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

  displayedColumns: string[] = ['nro', 'ruc', 'nombreempresa', 'email', 'telefono', 'direccion', 'estado', 'accion'];
  dataSource = [
    { nro: '1', ruc: '123456789', nombreempresa: 'H&H Papas', email: 'hhpapas@gmail.com', telefono: '+51 987 654 321', direccion: 'Bonaventura N123', estado: 'Activo', accion: '' },
    { nro: '2', ruc: '123456789', nombreempresa: 'PeruanitaPapita', email: 'ppimportacion@gmail.com', telefono: '+51 987 654 321', direccion: 'Calle Bolivar N987', estado: 'Desactivado', accion: '' },
    { nro: '3', ruc: '123456789', nombreempresa: 'PepePapaYMas', email: 'pepepapa@outlook.com', telefono: '+51 987 654 321', direccion: 'Avenida Aviación N963', estado: 'Activo', accion: '' },
    { nro: '4', ruc: '123456789', nombreempresa: 'Papo y Papa', email: 'papopapasimport@gmail.com', telefono: '+51 987 654 321', direccion: 'Andrés Avelino Cáceres N456', estado: 'Activo', accion: '' },
    { nro: '5', ruc: '123456789', nombreempresa: 'Snack Deliciosos Mary', email: 'sdMary@gmail.com', telefono: '+51 987 654 321', direccion: 'SigloXX N452', estado: 'Activo', accion: '' },
    { nro: '6', ruc: '123456789', nombreempresa: 'Bocaditos Fernan', email: 'bocadFernan@outlook.com', telefono: '+51 987 654 321', direccion: 'San Camilo N159', estado: 'Activo', accion: '' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
