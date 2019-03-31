import { TestBed } from '@angular/core/testing';

import { AwsResourcesService } from './aws-resources.service';

describe('AwsResourcesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwsResourcesService = TestBed.get(AwsResourcesService);
    expect(service).toBeTruthy();
  });
});
