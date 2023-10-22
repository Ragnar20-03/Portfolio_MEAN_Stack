import { TestBed } from '@angular/core/testing';

import { GetPortFolioService } from './get-port-folio.service';

describe('GetPortFolioService', () => {
  let service: GetPortFolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPortFolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
