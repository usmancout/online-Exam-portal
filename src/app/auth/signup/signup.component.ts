import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [
    HttpClientModule,  // Make sure to import HttpClientModule here
    FormsModule,
    RouterLink,
    NgIf,
  ]
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSignup() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.http.post('http://localhost:3000/api/auth/signup', userData)
      .subscribe({
        next: (response) => {
          console.log('User created successfully', response);
          alert('Account created successfully!');
          this.router.navigate(['/app-login']);
        },
        error: (error) => {
          console.error('Error creating user', error);
          if(error.status===400 && error.error.message==='User already exists')
          {
            this.errorMessage="user already exists! try another email";
          }
          this.errorMessage="An error occured while creating this account";
        }
      });
  }
}
