import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    RouterLink
  ],
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private router: Router) {
  }

  onLogin() {
    console.log('Login attempt:', { email: this.email, password: this.password });
    alert('Logged in successfully!');
    this.router.navigate(['/app-main-dashboard']);
    // Add authentication logic here
  }
}
