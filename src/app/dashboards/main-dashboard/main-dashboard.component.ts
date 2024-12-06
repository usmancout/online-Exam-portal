import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/shared/user.service';
import {OnInit} from '@angular/core';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
  standalone: true
})
export class MainDashboardComponent implements OnInit {
  username: string='';
  constructor(private router: Router, private userService: UserService) {}
  ngOnInit() {
    this.username = this.userService.getUserName() || 'Guest';


  }



  startQuiz(subject: string) {
    if (subject === 'Math') {
      alert('Starting Math Quiz');
      this.router.navigate(['/app-math-quiz']);
    } else if (subject === 'Science') {
      alert('Starting Science Quiz');
      this.router.navigate(['/app-science-quiz']);
    } else if (subject === 'History') {
      alert('Starting History Quiz');
      this.router.navigate(['/app-history-quiz']);
    } else if (subject === 'English') {
      alert('Starting English Quiz');
      this.router.navigate(['/app-english-quiz']);
    } else {
      alert('Invalid choice! Please select a valid subject.');
    }
  }
}
