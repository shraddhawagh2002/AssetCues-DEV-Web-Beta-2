import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglandingpageComponent } from './bloglandingpage.component';

describe('BloglandingpageComponent', () => {
  let component: BloglandingpageComponent;
  let fixture: ComponentFixture<BloglandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloglandingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloglandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
