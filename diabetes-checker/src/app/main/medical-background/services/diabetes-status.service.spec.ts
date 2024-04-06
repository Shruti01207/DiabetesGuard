import { TestBed } from '@angular/core/testing';

import { DiabetesStatusService } from './diabetes-status.service';

describe('DiabetesStatusService', () => {
  let service: DiabetesStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabetesStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
