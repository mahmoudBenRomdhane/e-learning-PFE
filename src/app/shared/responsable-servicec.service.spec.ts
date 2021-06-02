import { TestBed } from '@angular/core/testing';

import { ResponsableServicecService } from './responsable-servicec.service';

describe('ResponsableServicecService', () => {
  let service: ResponsableServicecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsableServicecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
