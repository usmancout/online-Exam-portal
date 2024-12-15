import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-english-quiz',
  templateUrl: './english-quiz.component.html',
  styleUrls: ['./english-quiz.component.css'],
  standalone: true,
  imports: [
    NgForOf
  ]
})
export class EnglishQuizComponent {
  constructor(private router: Router) {}

  startQuiz(numberOfQuestions: string) {
    alert(`Starting Math Quiz with ${numberOfQuestions} questions!`);
    this.router.navigate(['/app-english-solve-quiz']);
  }
}
