import { TestBed } from '@angular/core/testing';

import { JsonResultService } from './json-result.service';

describe('JsonResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonResultService = TestBed.get(JsonResultService);
    expect(service).toBeTruthy();
  });
});
