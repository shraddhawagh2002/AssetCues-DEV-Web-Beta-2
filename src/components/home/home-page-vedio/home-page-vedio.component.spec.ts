import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageVedioComponent } from './home-page-vedio.component';

describe('HomePageVedioComponent', () => {
  let component: HomePageVedioComponent;
  let fixture: ComponentFixture<HomePageVedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageVedioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageVedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
