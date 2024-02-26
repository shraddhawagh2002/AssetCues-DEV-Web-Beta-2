import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLayoutOnPageComponent } from './tab-layout-on-page.component';

describe('TabLayoutOnPageComponent', () => {
  let component: TabLayoutOnPageComponent;
  let fixture: ComponentFixture<TabLayoutOnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabLayoutOnPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabLayoutOnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
