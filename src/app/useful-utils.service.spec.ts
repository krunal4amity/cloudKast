import { TestBed } from '@angular/core/testing';

import { UsefulUtilsService } from './useful-utils.service';

describe('UsefulUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsefulUtilsService = TestBed.get(UsefulUtilsService);
    expect(service).toBeTruthy();
  });
});
