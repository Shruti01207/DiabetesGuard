import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeathMaintainanceComponent } from './heath-maintainance.component';

describe('HeathMaintainanceComponent', () => {
  let component: HeathMaintainanceComponent;
  let fixture: ComponentFixture<HeathMaintainanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeathMaintainanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeathMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
