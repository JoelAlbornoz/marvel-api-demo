import { TestBed } from '@angular/core/testing';

import { HfethService } from './hfeth.service';

describe('HfethService', () => {
  let service: HfethService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HfethService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
