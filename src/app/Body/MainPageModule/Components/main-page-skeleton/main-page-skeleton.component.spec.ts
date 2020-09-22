import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSkeletonComponent } from './main-page-skeleton.component';

describe('MainPageSkeletonComponent', () => {
  let component: MainPageSkeletonComponent;
  let fixture: ComponentFixture<MainPageSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
