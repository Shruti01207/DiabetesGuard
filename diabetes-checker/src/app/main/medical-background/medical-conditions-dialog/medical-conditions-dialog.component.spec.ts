import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalConditionsDialogComponent } from './medical-conditions-dialog.component';

describe('MedicalConditionsDialogComponent', () => {
  let component: MedicalConditionsDialogComponent;
  let fixture: ComponentFixture<MedicalConditionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalConditionsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalConditionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
