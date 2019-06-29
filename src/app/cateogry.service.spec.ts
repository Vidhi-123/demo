import { TestBed, inject } from '@angular/core/testing';

import { CateogryService } from './cateogry.service';

describe('CateogryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CateogryService]
    });
  });

  it('should be created', inject([CateogryService], (service: CateogryService) => {
    expect(service).toBeTruthy();
  }));
});
