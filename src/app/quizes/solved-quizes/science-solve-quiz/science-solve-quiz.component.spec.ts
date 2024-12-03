import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceSolveQuizComponent } from './science-solve-quiz.component';

describe('ScienceSolveQuizComponent', () => {
  let component: ScienceSolveQuizComponent;
  let fixture: ComponentFixture<ScienceSolveQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScienceSolveQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceSolveQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
