import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Router, RouterLink} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgIf} from '@angular/common';  // Import HttpClient

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

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/api/auth/login', loginData)
      .subscribe({
        next: (response) => {
          console.log('User logged in successfully', response);
          alert('Logged in successfully!');
          this.router.navigate(['/app-main-dashboard']);
        },
        error: (error) => {
          console.error('Error logging in', error);
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      });
  }
}
