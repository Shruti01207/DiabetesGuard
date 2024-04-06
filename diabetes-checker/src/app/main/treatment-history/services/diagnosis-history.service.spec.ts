import { TestBed } from '@angular/core/testing';

import { DiagnosisHistoryService } from './diagnosis-history.service';

describe('DiagnosisHistoryService', () => {
  let service: DiagnosisHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosisHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
