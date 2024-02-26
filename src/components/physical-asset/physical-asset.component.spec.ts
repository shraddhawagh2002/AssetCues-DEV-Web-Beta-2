import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalAssetComponent } from './physical-asset.component';

describe('PhysicalAssetComponent', () => {
  let component: PhysicalAssetComponent;
  let fixture: ComponentFixture<PhysicalAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalAssetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicalAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
