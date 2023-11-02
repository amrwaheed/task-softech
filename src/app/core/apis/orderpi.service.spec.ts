import { TestBed } from '@angular/core/testing';

import { OrderpiService } from './orderpi.service';

describe('OrderpiService', () => {
  let service: OrderpiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderpiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
