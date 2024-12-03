import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishQuizComponent } from './english-quiz.component';

describe('EnglishQuizComponent', () => {
  let component: EnglishQuizComponent;
  let fixture: ComponentFixture<EnglishQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
