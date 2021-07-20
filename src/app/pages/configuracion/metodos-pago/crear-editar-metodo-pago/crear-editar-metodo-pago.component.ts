import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'fury-crear-editar-metodo-pago',
  templateUrl: './crear-editar-metodo-pago.component.html',
  styleUrls: ['./crear-editar-metodo-pago.component.scss']
})
export class CrearEditarMetodoPagoComponent implements OnInit {

  form: FormGroup;
  pasarelas = [
    { id: 1, nombre: 'Niubiz' },
    { id: 2, nombre: 'Stripe' },
    { id: 3, nombre: 'Mercado Pago' }
  ];
  tipoDef: number;
  editar: boolean = false;
  tiposMetodoPago: any[] = [
    { id: 1, nombre: 'Contra entrega' },
    { id: 2, nombre: 'Transferencia bancaria' },
    { id: 3, nombre: 'Pago por aplicación' },
    { id: 4, nombre: 'Pasarela de Pago' },
  ];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CrearEditarMetodoPagoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data) {
      console.log(this.data);
      this.editar = true;
      this.tipoDef = this.tiposMetodoPago.find(t => t.nombre == this.data.tipo)?.id;
    }
    this.form = this.fb.group({
      tipo: [this.tipoDef],
      entidad: [],
      cc: [],
      cci: [],
      app: [],
      nroCelular: [],
      pasarela: [],
      token: []
    });
  }

}
