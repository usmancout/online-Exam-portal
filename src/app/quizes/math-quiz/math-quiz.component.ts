import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-math-quiz',
  templateUrl: './math-quiz.component.html',
  styleUrls: ['./math-quiz.component.css'],
  standalone: true,
  imports: [
    NgForOf
  ]
})
export class MathQuizComponent {
  constructor(private router: Router) {}

  startQuiz(numberOfQuestions: string) {
    alert(`Starting Math Quiz with ${numberOfQuestions} questions!`);
    this.router.navigate(['/app-math-solve-quiz']);
    // Navigate to the quiz or handle quiz logic here
  }
}
