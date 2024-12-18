import { trigger, transition, style, animate } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('LoginPage => DashboardPage', [
    style({ opacity: 0, transform: 'translateX(100%)' }), // Start off-screen to the right
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })), // Slide into view
  ]),
  transition('DashboardPage => LoginPage', [
    style({ opacity: 0, transform: 'translateX(-100%)' }), // Start off-screen to the left
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })), // Slide into view
  ]),
]);
