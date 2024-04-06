import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesStatusComponent } from './diabetes-status.component';

describe('DiabetesStatusComponent', () => {
  let component: DiabetesStatusComponent;
  let fixture: ComponentFixture<DiabetesStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
