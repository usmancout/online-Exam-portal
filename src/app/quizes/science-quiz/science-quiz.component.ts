import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-science-quiz',
  templateUrl: './science-quiz.component.html',
  styleUrls: ['./science-quiz.component.css'],
  standalone: true,
  imports: [
    NgForOf
  ]
})
export class ScienceQuizComponent {
  constructor(private router: Router) {}

  startQuiz(numberOfQuestions: string) {
    alert(`Starting Math Quiz with ${numberOfQuestions} questions!`);
    this.router.navigate(['/app-science-solve-quiz']);
  }
}
