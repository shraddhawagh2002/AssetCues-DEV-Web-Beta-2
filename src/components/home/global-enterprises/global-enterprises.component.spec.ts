import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalEnterprisesComponent } from './global-enterprises.component';

describe('GlobalEnterprisesComponent', () => {
  let component: GlobalEnterprisesComponent;
  let fixture: ComponentFixture<GlobalEnterprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalEnterprisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
