import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Education } from '../../models/portfolio.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card"

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Education | null = null
  certifications: string[] = []

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getEducation().subscribe((edu) => {
      this.education = edu
    })

    this.portfolioService.getCertifications().subscribe((certs) => {
      this.certifications = certs
    })
  }
}
