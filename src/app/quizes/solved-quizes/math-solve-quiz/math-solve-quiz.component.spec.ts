import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathSolveQuizComponent } from './math-solve-quiz.component';

describe('MathSolveQuizComponent', () => {
  let component: MathSolveQuizComponent;
  let fixture: ComponentFixture<MathSolveQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathSolveQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathSolveQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
