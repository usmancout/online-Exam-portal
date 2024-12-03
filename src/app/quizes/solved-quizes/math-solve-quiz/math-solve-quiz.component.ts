import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-math-solve-quiz',
  templateUrl: './math-solve-quiz.component.html',
  styleUrls: ['./math-solve-quiz.component.css'],
  standalone: true,
  imports: [NgIf, NgForOf],
})
export class MathSolveQuizComponent {
  questions = [
    {
      question: 'What is 5 + 3?',
      options: ['6', '7', '8', '9'],
      answer: '8',
    },
    {
      question: 'What is 10 - 4?',
      options: ['5', '6', '7', '8'],
      answer: '6',
    },
    {
      question: 'What is 7 * 2?',
      options: ['12', '14', '16', '18'],
      answer: '14',
    },
    {
      question: 'What is 9 / 3?',
      options: ['2', '3', '4', '5'],
      answer: '3',
    },
  ];

  currentQuestionIndex = 0;
  selectedAnswers: (string | null)[] = Array(this.questions.length).fill(null);
  score = 0;
  timer: number = 30; // 30 seconds per question
  interval: any;

  constructor(protected router: Router) {}

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.stopTimer(); // Prevent overlapping intervals
    this.timer = 30;
    this.interval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        this.nextQuestion(); // Auto-skip on timeout
      }
    }, 1000);
  }

  stopTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  selectAnswer(option: string) {
    this.selectedAnswers[this.currentQuestionIndex] = option;
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.startTimer();
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.startTimer();
    } else {
      this.showResult();
    }
  }

  skipQuestion() {
    this.nextQuestion();
  }

  submitAnswer() {
    this.calculateScore();
    this.showResult();
  }

  calculateScore() {
    this.score = this.questions.reduce((total, question, index) => {
      return total + (this.selectedAnswers[index] === question.answer ? 1 : 0);
    }, 0);
  }

  showResult() {
    this.stopTimer();
    const message =
      this.score >= this.questions.length / 2
        ? `Congratulations! You scored ${this.score}/${this.questions.length}.`
        : `Try again! You scored ${this.score}/${this.questions.length}.`;

    alert(message);
  }
}
