import { TestBed } from '@angular/core/testing';

import { PerftoolsService } from './perftools.service';

describe('PerftoolsService', () => {
  let service: PerftoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerftoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
