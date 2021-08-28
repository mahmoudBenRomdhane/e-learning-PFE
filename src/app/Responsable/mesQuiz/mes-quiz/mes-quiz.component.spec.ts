import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesQuizComponent } from './mes-quiz.component';

describe('MesQuizComponent', () => {
  let component: MesQuizComponent;
  let fixture: ComponentFixture<MesQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
