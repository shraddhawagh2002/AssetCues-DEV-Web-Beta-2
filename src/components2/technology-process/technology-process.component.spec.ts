import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyProcessComponent } from './technology-process.component';

describe('TechnologyProcessComponent', () => {
  let component: TechnologyProcessComponent;
  let fixture: ComponentFixture<TechnologyProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologyProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
