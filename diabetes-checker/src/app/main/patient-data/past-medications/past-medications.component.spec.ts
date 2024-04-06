import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastMedicationsComponent } from './past-medications.component';

describe('PastMedicationsComponent', () => {
  let component: PastMedicationsComponent;
  let fixture: ComponentFixture<PastMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastMedicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
