import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyHistoryDialogComponent } from './family-history-dialog.component';

describe('FamilyHistoryDialogComponent', () => {
  let component: FamilyHistoryDialogComponent;
  let fixture: ComponentFixture<FamilyHistoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyHistoryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
