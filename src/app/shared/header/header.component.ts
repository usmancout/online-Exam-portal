import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/shared/user.service';
import { Subscription } from 'rxjs';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class HeaderComponent implements OnInit, OnDestroy {
  username: string = 'Guest';  // Default username
  dropdownVisible: boolean = false;  // Dropdown visibility
  isLoggedIn: boolean = false;  // Login state
  private usernameSubscription!: Subscription;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    // Subscribe to username changes from the UserService
    this.usernameSubscription = this.userService.username$.subscribe(username => {
      this.username = username || 'Guest';  // Set to 'Guest' if no user is logged in
      this.isLoggedIn = this.username !== 'Guest';  // Set login state
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the username observable to prevent memory leaks
    if (this.usernameSubscription) {
      this.usernameSubscription.unsubscribe();
    }
  }

  toggleDropdown() {
    // Toggle dropdown visibility
    this.dropdownVisible = !this.dropdownVisible;
  }

  logout() {
    // Clear user data and navigate to login page
    this.userService.clearUserName();
    this.router.navigate(['/app-login']);
  }

  goToProfile() {
    // Navigate to the profile page
    this.router.navigate(['/app-profile']);
  }
}
