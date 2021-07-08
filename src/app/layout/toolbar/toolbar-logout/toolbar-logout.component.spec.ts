import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarLogoutComponent } from './toolbar-logout.component';

describe('ToolbarLogoutComponent', () => {
  let component: ToolbarLogoutComponent;
  let fixture: ComponentFixture<ToolbarLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
