import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccurateCalculationComponent } from './accurate-calculation.component';

describe('AccurateCalculationComponent', () => {
  let component: AccurateCalculationComponent;
  let fixture: ComponentFixture<AccurateCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccurateCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccurateCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
