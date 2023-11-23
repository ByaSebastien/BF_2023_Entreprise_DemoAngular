import { TestBed } from '@angular/core/testing';

import { FakeAuthServiceService } from './fake-auth-service.service';

describe('FakeAuthServiceService', () => {
  let service: FakeAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
