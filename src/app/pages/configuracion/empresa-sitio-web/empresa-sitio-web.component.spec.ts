import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaSitioWebComponent } from './empresa-sitio-web.component';

describe('EmpresaSitioWebComponent', () => {
  let component: EmpresaSitioWebComponent;
  let fixture: ComponentFixture<EmpresaSitioWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaSitioWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaSitioWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
