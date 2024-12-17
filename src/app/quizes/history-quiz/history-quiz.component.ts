import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-history-quiz',
  templateUrl: './history-quiz.component.html',
  styleUrls: ['./history-quiz.component.css'],
  standalone: true,
  imports: [
    NgForOf
  ]
})
export class HistoryQuizComponent {
  constructor(private router: Router) {}

  startQuiz(numberOfQuestions: string) {
    alert(`Starting Math Quiz with ${numberOfQuestions} questions!`);
    this.router.navigate(['/app-history-solve-quiz']);
  }
}
