import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Experience } from '../../models/portfolio.model';
import { PortfolioService } from '../../services/portfolio.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experience: Experience[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getExperience().subscribe((exp) => {
      this.experience = exp
    })
  }
}
