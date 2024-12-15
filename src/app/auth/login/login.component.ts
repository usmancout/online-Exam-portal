import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Router, RouterLink} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgIf} from '@angular/common';
import { UserService} from '../../services/shared/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    RouterLink,
    HttpClientModule,
    NgIf
  ],
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {}

  onLogin() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:5000/api/auth/login', loginData).subscribe({
      next: (response: any) => {
        if (response && response.user && response.user.username && response.user.email) {
          // Store username and email in localStorage
          localStorage.setItem('userEmail', response.user.email);
          localStorage.setItem('userName', response.user.username);

          // Optionally, store other data like user token, etc.
          localStorage.setItem('userToken', response.token); // If there's a token to store

          // Redirect to the dashboard or main page
          this.router.navigate(['/app-main-dashboard']);
        } else {
          console.error('Username or email not found in response:', response);
          this.errorMessage = 'Unexpected error: username or email missing from server response.';
        }
      },
      error: (error) => {
        console.error('Error logging in', error);
        this.errorMessage = 'Invalid email or password. Please try again.';
      },
    });
  }

}
