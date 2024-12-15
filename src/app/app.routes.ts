import { Routes } from '@angular/router';
import { MainDashboardComponent } from './dashboards/main-dashboard/main-dashboard.component';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {MathQuizComponent} from './quizes/math-quiz/math-quiz.component';
import {EnglishQuizComponent} from './quizes/english-quiz/english-quiz.component';
import {ScienceQuizComponent} from './quizes/science-quiz/science-quiz.component';
import {HistoryQuizComponent} from './quizes/history-quiz/history-quiz.component';
import {MathSolveQuizComponent} from './quizes/solved-quizes/math-solve-quiz/math-solve-quiz.component';
import {HistorySolveQuizComponent} from './quizes/solved-quizes/history-solve-quiz/history-solve-quiz.component';
import {EnglishSolveQuizComponent} from './quizes/solved-quizes/english-solve-quiz/english-solve-quiz.component';
import {ScienceSolveQuizComponent} from './quizes/solved-quizes/science-solve-quiz/science-solve-quiz.component';
import {ProfileComponent} from './dashboards/profile/profile.component';


export const routes: Routes = [
  { path: 'app-login', component: LoginComponent },
  {path:'app-signup', component: SignupComponent},
  {path:'app-main-dashboard', component: MainDashboardComponent},
  {path:'app-math-quiz',component:MathQuizComponent},
  {path:'app-english-quiz',component:EnglishQuizComponent},
  {path:'app-science-quiz',component:ScienceQuizComponent},
  {path:'app-history-quiz',component:HistoryQuizComponent},
  {path:'app-math-solve-quiz',component:MathSolveQuizComponent},
  {path:'app-history-solve-quiz',component:HistorySolveQuizComponent},
  {path:'app-english-solve-quiz',component:EnglishSolveQuizComponent},
  {path:'app-science-solve-quiz',component:ScienceSolveQuizComponent},
  {path:'app-profile',component:ProfileComponent},

  { path: '**', redirectTo: '/app-login', pathMatch: 'full' }, // Wildcard route should come last
];
