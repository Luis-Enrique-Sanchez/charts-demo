import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadesPieChartComponent } from './universidades-pie-chart.component';

describe('UniversidadesPieChartComponent', () => {
  let component: UniversidadesPieChartComponent;
  let fixture: ComponentFixture<UniversidadesPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadesPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadesPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
