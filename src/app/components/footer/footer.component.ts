import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDividerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {
   sendEmail() {
    window.location.href = "mailto:bawashubham04@gmail.com"
  }

  openLinkedIn() {
    window.open("https://linkedin.com/in/shubham-07ab/", "_blank")
  }

  openGithub() {
    window.open("https://github.com/shubhambawa", "_blank")
  }
}

