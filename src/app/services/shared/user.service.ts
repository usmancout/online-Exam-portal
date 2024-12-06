import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  setEmail(username: string) {
    localStorage.setItem('username', username);
  }

  getEmail(): string | null {
    return localStorage.getItem('username');
  }

  clearEmail() {
    localStorage.removeItem('username');
  }
}
