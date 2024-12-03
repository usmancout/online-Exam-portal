import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishSolveQuizComponent } from './english-solve-quiz.component';

describe('EnglishSolveQuizComponent', () => {
  let component: EnglishSolveQuizComponent;
  let fixture: ComponentFixture<EnglishSolveQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishSolveQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishSolveQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
