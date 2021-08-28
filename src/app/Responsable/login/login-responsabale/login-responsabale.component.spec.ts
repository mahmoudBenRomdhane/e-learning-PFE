import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginResponsabaleComponent } from './login-responsabale.component';

describe('LoginResponsabaleComponent', () => {
  let component: LoginResponsabaleComponent;
  let fixture: ComponentFixture<LoginResponsabaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginResponsabaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginResponsabaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
