import { TestBed } from '@angular/core/testing';

import { KitchenstaffService } from './kitchenstaff.service';

describe('KitchenstaffService', () => {
  let service: KitchenstaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitchenstaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
