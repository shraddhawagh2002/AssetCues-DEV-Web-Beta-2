import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBlandingComponent } from './header-blanding.component';

describe('HeaderBlandingComponent', () => {
  let component: HeaderBlandingComponent;
  let fixture: ComponentFixture<HeaderBlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBlandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderBlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
