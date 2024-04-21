import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesManagementComponent } from './diabetes-management.component';

describe('DiabetesManagementComponent', () => {
  let component: DiabetesManagementComponent;
  let fixture: ComponentFixture<DiabetesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
