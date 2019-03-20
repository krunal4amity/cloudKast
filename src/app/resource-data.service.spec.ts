import { TestBed } from '@angular/core/testing';

import { ResourceDataService } from './resource-data.service';

describe('ResourceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceDataService = TestBed.get(ResourceDataService);
    expect(service).toBeTruthy();
  });
});
