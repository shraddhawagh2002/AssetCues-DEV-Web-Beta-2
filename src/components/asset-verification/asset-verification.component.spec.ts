import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetVerificationComponent } from './asset-verification.component';

describe('AssetVerificationComponent', () => {
  let component: AssetVerificationComponent;
  let fixture: ComponentFixture<AssetVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
