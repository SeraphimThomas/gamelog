import { TestBed } from '@angular/core/testing';

import { IgdbCallService } from './igdb-call.service';

describe('IgdbCallService', () => {
  let service: IgdbCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgdbCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
