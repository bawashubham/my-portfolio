import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  openGithub() {
    window.open("https://github.com/shubhambawa", "_blank");
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';  
    link.download = 'My_Resume.pdf';  
    link.click();
  }

  contactMe() {
    const email = 'bawashubham04@gmail.com';
    const subject = encodeURIComponent('Hello!');
    const body = encodeURIComponent('I would like to get in touch with you.');
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    const win = window.open(mailtoLink, '_blank');
    if (!win) {
      window.location.href = mailtoLink;
    }
   }
}


