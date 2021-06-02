import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableProfileComponent } from './responsable-profile.component';

describe('ResponsableProfileComponent', () => {
  let component: ResponsableProfileComponent;
  let fixture: ComponentFixture<ResponsableProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsableProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
