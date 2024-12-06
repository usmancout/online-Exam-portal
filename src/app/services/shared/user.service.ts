import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usernameSubject = new BehaviorSubject<string | null>(null);  // Default to null
  username$ = this.usernameSubject.asObservable();  // Observable for components to subscribe to

  setUserName(username: string) {
    this.usernameSubject.next(username);  // Update username
  }

  getUserName(): string | null {
    return this.usernameSubject.value;  // Return current username
  }

  clearUserName() {
    this.usernameSubject.next(null);  // Clear username on logout
  }
}
