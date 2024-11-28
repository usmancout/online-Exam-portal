import { Routes } from '@angular/router';
import { MainDashboardComponent } from './dashboards/main-dashboard/main-dashboard.component';
import { StudentLoginComponent } from './auth/student-login/student-login.component';
import {TeacherLoginComponent} from './auth/teacher-login/teacher-login.component';

export const routes: Routes = [
  { path: 'app-main-dashboard', component: MainDashboardComponent },
  { path: 'app-student-login', component: StudentLoginComponent },
  {path:'app-teacher-login', component: TeacherLoginComponent },
  { path: '**', redirectTo: '/app-main-dashboard', pathMatch: 'full' }, // Wildcard route should come last
];
