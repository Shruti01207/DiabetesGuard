import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsQuestionsComponent } from './symptoms-questions.component';

describe('SymptomsQuestionsComponent', () => {
  let component: SymptomsQuestionsComponent;
  let fixture: ComponentFixture<SymptomsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomsQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
