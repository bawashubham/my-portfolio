import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  contactMe() {
    window.location.href = "mailto:bawashubham04@gmail.com"
  }

  viewGithub() {
    window.open("https://github.com/shubhambawa", "_blank")
  }
}
