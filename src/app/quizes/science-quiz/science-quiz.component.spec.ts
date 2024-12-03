import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceQuizComponent } from './science-quiz.component';

describe('ScienceQuizComponent', () => {
  let component: ScienceQuizComponent;
  let fixture: ComponentFixture<ScienceQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScienceQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
