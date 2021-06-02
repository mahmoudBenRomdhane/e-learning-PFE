import { TestBed } from '@angular/core/testing';

import { AuthIntercptorService } from './auth-intercptor.service';

describe('AuthIntercptorService', () => {
  let service: AuthIntercptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthIntercptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
