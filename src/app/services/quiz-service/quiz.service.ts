import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  // Fetch Math Quiz Questions
  fetchMathQuizQuestions(): Observable<any> {
    const apiUrl = 'https://opentdb.com/api.php?amount=10&category=19&type=multiple'; // Math category ID is 19
    return this.http.get<any>(apiUrl);
  }

  // Fetch Science Quiz Questions
  fetchScienceQuizQuestions(): Observable<any> {
    const apiUrl = 'https://opentdb.com/api.php?amount=10&category=17&type=multiple'; // Science category ID is 17
    return this.http.get<any>(apiUrl);
  }

  // Fetch History Quiz Questions
  fetchHistoryQuizQuestions(): Observable<any> {
    const apiUrl = 'https://opentdb.com/api.php?amount=10&category=23&type=multiple'; // History category ID is 23
    return this.http.get<any>(apiUrl);
  }

  // Fetch English Quiz Questions
  fetchEnglishQuizQuestions(): Observable<any> {
    const apiUrl = 'https://opentdb.com/api.php?amount=10&category=25&type=multiple'; // English category ID is 9
    return this.http.get<any>(apiUrl);
  }
}
