import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class HeaderComponent implements OnInit {
  username: string = 'Guest';  // Default username
  email: string = '';         // Default email
  dropdownVisible: boolean = false;  // Dropdown visibility
  isLoggedIn: boolean = false;  // Login state

  constructor(private router: Router) {}

  ngOnInit() {
    // Get username and email from localStorage
    const storedUsername = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('userEmail');

    // Set username and email if found
    if (storedUsername && storedEmail) {
      this.username = storedUsername;
      this.email = storedEmail;
      this.isLoggedIn = true;  // User is logged in
    }
  }

  toggleDropdown() {
    // Toggle dropdown visibility
    this.dropdownVisible = !this.dropdownVisible;
  }

  logout() {
    // Clear user data and navigate to login page
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    this.isLoggedIn = false;  // Update login state
    this.username = 'Guest'; // Reset username
    this.email = '';         // Reset email
    this.router.navigate(['/app-login']);
  }

  goToProfile() {
    // Navigate to the profile page
    this.router.navigate(['/app-profile']);
  }
}
