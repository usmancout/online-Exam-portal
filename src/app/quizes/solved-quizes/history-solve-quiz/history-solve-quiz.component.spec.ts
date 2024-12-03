import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySolveQuizComponent } from './history-solve-quiz.component';

describe('HistorySolveQuizComponent', () => {
  let component: HistorySolveQuizComponent;
  let fixture: ComponentFixture<HistorySolveQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorySolveQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorySolveQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
