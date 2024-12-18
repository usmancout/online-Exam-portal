import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {routeAnimations} from './animations/route-animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Use "styleUrls" instead of "styleUrl"
  animations: [routeAnimations], // Attach animations here
})
export class AppComponent {
  title = 'ExamPortal';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
