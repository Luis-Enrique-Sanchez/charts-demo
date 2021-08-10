import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasChartComponent } from './personas-chart.component';

describe('PersonasChartComponent', () => {
  let component: PersonasChartComponent;
  let fixture: ComponentFixture<PersonasChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
