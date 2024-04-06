import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisHistoryDialogComponent } from './diagnosis-history-dialog.component';

describe('DiagnosisHistoryDialogComponent', () => {
  let component: DiagnosisHistoryDialogComponent;
  let fixture: ComponentFixture<DiagnosisHistoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosisHistoryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
