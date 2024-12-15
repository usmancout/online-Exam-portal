import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { UserService } from '../../services/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    HttpClientModule,
  ],
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username: string = '';
  email: string = ''; // Email for profile fetching and updating

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    //this.username = this.userService.getUserName() || 'Guest';
    // Retrieve the email from localStorage or the authentication token
    this.email = localStorage.getItem('userEmail') || '';
    this.username = localStorage.getItem('userName') || 'Guest';


  }

  // Save updated profile information when the user presses enter


  // Listen for 'Enter' key to trigger saveProfile function
}
