import { TestBed } from '@angular/core/testing';

import { SocietyManagementService } from './society-management.service';

describe('SocietyManagementService', () => {
  let service: SocietyManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocietyManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
