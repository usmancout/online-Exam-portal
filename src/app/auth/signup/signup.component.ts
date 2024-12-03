import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [
    FormsModule,
    RouterLink
  ],
  standalone: true
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  constructor(private router: Router) {}


  onSignup() {
    console.log('Signup attempt:', {
      username: this.username,
      email: this.email,
      password: this.password,
    });
    alert('Account created successfully!');
    this.router.navigate(['/app-login']);

    // Add your registration logic here (e.g., API call)
  }
}
