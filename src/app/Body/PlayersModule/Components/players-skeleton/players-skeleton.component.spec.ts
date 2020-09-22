import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersSkeletonComponent } from './players-skeleton.component';

describe('PlayersSkeletonComponent', () => {
  let component: PlayersSkeletonComponent;
  let fixture: ComponentFixture<PlayersSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
