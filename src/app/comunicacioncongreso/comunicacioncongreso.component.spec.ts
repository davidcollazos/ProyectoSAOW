import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacioncongresoComponent } from './comunicacioncongreso.component';

describe('ComunicacioncongresoComponent', () => {
  let component: ComunicacioncongresoComponent;
  let fixture: ComponentFixture<ComunicacioncongresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacioncongresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacioncongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
