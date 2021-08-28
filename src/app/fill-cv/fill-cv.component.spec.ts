import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillCvComponent } from './fill-cv.component';

describe('FillCvComponent', () => {
  let component: FillCvComponent;
  let fixture: ComponentFixture<FillCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
