import { TestBed } from '@angular/core/testing';

import { SifreService } from './sifre.service';

describe('SifreService', () => {
  let service: SifreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SifreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
