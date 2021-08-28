import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResponsableComponent } from './home-responsable.component';

describe('HomeResponsableComponent', () => {
  let component: HomeResponsableComponent;
  let fixture: ComponentFixture<HomeResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
