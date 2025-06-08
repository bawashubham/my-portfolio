import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ContactInfo } from '../../models/portfolio.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {
  
  contactInfo: ContactInfo | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getContactInfo().subscribe((info) => {
      this.contactInfo = info
    })
  }

  openGithub() {
    window.open("https://github.com/shubhambawa", "_blank")
  }

}
