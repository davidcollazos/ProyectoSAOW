import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportecientificoComponent } from './reportecientifico.component';

describe('ReportecientificoComponent', () => {
  let component: ReportecientificoComponent;
  let fixture: ComponentFixture<ReportecientificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportecientificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportecientificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
