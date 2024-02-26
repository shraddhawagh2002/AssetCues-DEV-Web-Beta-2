import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothTransitionComponent } from './smooth-transition.component';

describe('SmoothTransitionComponent', () => {
  let component: SmoothTransitionComponent;
  let fixture: ComponentFixture<SmoothTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmoothTransitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmoothTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
