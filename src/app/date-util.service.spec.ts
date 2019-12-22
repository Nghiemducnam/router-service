import { TestBed } from '@angular/core/testing';

import { DateUtilService } from './date-util.service';

describe('DateUtilServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateUtilService = TestBed.get(DateUtilService);
    expect(service).toBeTruthy();
  });
});
