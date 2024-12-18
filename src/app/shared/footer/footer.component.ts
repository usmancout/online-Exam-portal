import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for standalone component

@Component({
  selector: 'app-footer',
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
}
