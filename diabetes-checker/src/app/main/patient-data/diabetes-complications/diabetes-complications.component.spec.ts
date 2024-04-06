import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesComplicationsComponent } from './diabetes-complications.component';

describe('DiabetesComplicationsComponent', () => {
  let component: DiabetesComplicationsComponent;
  let fixture: ComponentFixture<DiabetesComplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesComplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesComplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
