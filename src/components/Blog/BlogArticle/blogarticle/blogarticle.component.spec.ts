import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogarticleComponent } from './blogarticle.component';

describe('BlogarticleComponent', () => {
  let component: BlogarticleComponent;
  let fixture: ComponentFixture<BlogarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogarticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
