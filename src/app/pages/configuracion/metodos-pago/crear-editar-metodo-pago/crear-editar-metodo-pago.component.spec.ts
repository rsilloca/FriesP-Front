import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarMetodoPagoComponent } from './crear-editar-metodo-pago.component';

describe('CrearEditarMetodoPagoComponent', () => {
  let component: CrearEditarMetodoPagoComponent;
  let fixture: ComponentFixture<CrearEditarMetodoPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEditarMetodoPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEditarMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
