import { TestBed } from '@angular/core/testing';

import { KlbService } from './klb.service';

describe('KlbService', () => {
  let service: KlbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
