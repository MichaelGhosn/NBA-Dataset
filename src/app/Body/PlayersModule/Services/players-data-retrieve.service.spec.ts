import { TestBed } from '@angular/core/testing';

import { PlayersDataRetrieveService } from './players-data-retrieve.service';

describe('PlayersDataRetrieveService', () => {
  let service: PlayersDataRetrieveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersDataRetrieveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
