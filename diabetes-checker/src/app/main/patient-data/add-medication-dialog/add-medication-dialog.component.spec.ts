import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicationDialogComponent } from './add-medication-dialog.component';

describe('AddMedicationDialogComponent', () => {
  let component: AddMedicationDialogComponent;
  let fixture: ComponentFixture<AddMedicationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
