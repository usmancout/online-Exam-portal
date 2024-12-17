import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../../services/quiz-service/quiz.service';
import {Router} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-science-solve-quiz',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './science-solve-quiz.component.html',
  standalone: true,
  styleUrl: './science-solve-quiz.component.css'
})
export class EnglishSolveQuizComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex = 0;
  selectedAnswers: (string | null)[] = [];
  correctAnswers: string[] = [];
  score = 0;
  username:string | null='';
  timer = 30; // 30 seconds per question
  interval: any;
  isLoading = true;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.quizService.fetchScienceQuizQuestions().subscribe(
      (response) => {
        this.questions = response.results.map((q: any) => ({
          question: q.question,
          options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
          answer: q.correct_answer,
        }));
        this.selectedAnswers = Array(this.questions.length).fill(null);
        this.isLoading = false;
        this.startTimer();
      },
      (error) => {
        console.error('Failed to load questions', error);
      }
    );
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
      this.submitQuiz();
      this.currentQuestionIndex = -1; // Set to -1 to trigger the result template
    }
  }

  submitQuiz() {
    this.stopTimer();
    this.calculateScore();
  }

  calculateScore() {
    this.username=localStorage.getItem('userName');
    this.correctAnswers = this.questions
      .filter((question, index) => this.selectedAnswers[index] === question.answer)
      .map((question) => question.answer);
    this.score = this.correctAnswers.length;
  }

  navigateToDashboard() {
    this.router.navigate(['/app-main-dashboard']);
  }

}

export class ScienceSolveQuizComponent {
}
