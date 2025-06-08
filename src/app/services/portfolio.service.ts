import { Injectable } from "@angular/core"
import { type Observable, of } from "rxjs"
import { ContactInfo, Education, Experience, Project, Skill } from "../models/portfolio.model"

@Injectable({
  providedIn: "root",
})
export class PortfolioService {
  getSkills(): Observable<Skill[]> {
    const skills: Skill[] = [
      { category: "Languages", items: ["HTML5", "CSS3", "JavaScript", "TypeScript"] },
      { category: "Frameworks", items: ["Angular"] },
      { category: "Tools", items: ["Adobe Experience Manager", "Postman", "JIRA"] },
      { category: "Testing", items: ["Jasmine", "Karma"] },
    ]
    return of(skills)
  }

  getExperience(): Observable<Experience[]> {
    const experience: Experience[] = [
      {
        company: "Q3 Technologies",
        position: "Software Engineer",
        location: "Jaipur, Rajasthan, India",
        duration: "Dec 2024 – Present",
        achievements: [
          "Designed Angular reactive forms and used RxJS operators for mocking and API integration, enhancing application responsiveness and improving load times by 25%",
        ],
      },
      {
        company: "Infosys Ltd",
        position: "Senior Systems Engineer",
        location: "Chandigarh, India",
        duration: "Feb 2021 – April 2024",
        achievements: [
          "Designed comprehensive UI enhancements using Motif library and AG grid and translated business requirements into efficient code solutions using Angular 16",
          "Upgraded Angular application from Angular 16 to Angular 17, ensuring full compatibility and maintaining stability across deployments",
          "Led Agile Methodology Implementation, boosting team collaboration by 30% and optimizing workflows",
          "Converted 100+ business requirements into optimized coding solutions, resulting in a 95% project success rate",
          "Developed 20+ screens for insurance clients using Angular 17, enhancing user engagement by 40%",
          "Achieved a 70% success rate in test case execution using Jasmine and Karma for unit testing",
          "Received Client Appreciation Mail for delivering high-quality work and exceeding project expectations",
        ],
      },
    ]
    return of(experience)
  }

  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        title: "Treasure Admin",
        description:
          "A comprehensive admin dashboard built with Angular and Angular Material, designed for optimal user experience and efficient data management.",
        technologies: ["Angular", "Angular Material", "RxJS", "TypeScript"],
        features: [
          "Developed a responsive and user-friendly admin dashboard using Angular and Angular Material components to ensure a seamless user experience",
          "Integrated Angular Material's design principles for a consistent and visually appealing interface across the application",
          "Created data tables, forms, and modals using Angular Material to handle user inputs and display data effectively",
          "Implemented reusable UI components and services to enhance application modularity and maintainability",
          "Utilized RxJS for handling asynchronous operations and efficient data flow within the application",
        ],
        githubUrl: "https://github.com/shubhambawa/treasure-admin",
        demoUrl: "https://treasure-admin-demo.vercel.app",
      },
    ]
    return of(projects)
  }

  getEducation(): Observable<Education> {
    const education: Education = {
      degree: "Bachelor of Engineering",
      specialization: "Computer Science Engineering",
      university: "Chitkara University",
      location: "Baddi, Himachal Pradesh",
      cgpa: "8.34",
    }
    return of(education)
  }

  getCertifications(): Observable<string[]> {
    const certifications = [
      "Global Agile Certified - Infosys Global Agile Certified",
      "AWS - Fundamentals of AWS by Coursera",
    ]
    return of(certifications)
  }

  getContactInfo(): Observable<ContactInfo> {
    const contactInfo: ContactInfo = {
      phone: "+91 8219268329",
      email: "bawashubham04@gmail.com",
      linkedin: "linkedin.com/in/shubham-07ab/",
      github: "github.com/shubhambawa",
    }
    return of(contactInfo)
  }
}
