import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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

    // Listen to router events to dynamically check the current route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide the dropdown button if the user is on login or signup page
        const currentRoute = event.urlAfterRedirects;
        if (currentRoute === '/app-login' || currentRoute === '/app-signup') {
          this.isLoggedIn = false;
        }
        else if(storedUsername && storedEmail){
          this.isLoggedIn=true;
        }
      }
    });
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
