import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApperenantComponent } from './apperenant.component';

describe('ApperenantComponent', () => {
  let component: ApperenantComponent;
  let fixture: ComponentFixture<ApperenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApperenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApperenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
