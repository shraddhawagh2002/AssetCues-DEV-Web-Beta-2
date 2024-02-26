import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAssetComponent } from './simple-asset.component';

describe('SimpleAssetComponent', () => {
  let component: SimpleAssetComponent;
  let fixture: ComponentFixture<SimpleAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleAssetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
