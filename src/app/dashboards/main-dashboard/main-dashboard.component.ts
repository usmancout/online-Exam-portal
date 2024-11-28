import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'] // Corrected `styleUrl` to `styleUrls`
})
export class MainDashboardComponent {
  constructor(private router: Router) {}

  onStudentSignIn() {
    this.router.navigate(['/app-student-login']);
  }

  onTeacherSignIn() {
    this.router.navigate(['/app-teacher-login']);
  }

  onAdminSignIn() {
    this.router.navigate(['/app-admin-login']);
  }
}
