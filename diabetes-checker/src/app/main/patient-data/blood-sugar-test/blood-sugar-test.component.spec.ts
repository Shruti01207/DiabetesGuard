import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodSugarTestComponent } from './blood-sugar-test.component';

describe('BloodSugarTestComponent', () => {
  let component: BloodSugarTestComponent;
  let fixture: ComponentFixture<BloodSugarTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodSugarTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodSugarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
