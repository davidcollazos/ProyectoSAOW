import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitulolibroComponent } from './capitulolibro.component';

describe('CapitulolibroComponent', () => {
  let component: CapitulolibroComponent;
  let fixture: ComponentFixture<CapitulolibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitulolibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitulolibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
