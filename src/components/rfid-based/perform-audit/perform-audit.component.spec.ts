import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformAuditComponent } from './perform-audit.component';

describe('PerformAuditComponent', () => {
  let component: PerformAuditComponent;
  let fixture: ComponentFixture<PerformAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformAuditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
