import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Experience {
  year: string;
  role: string;
  company: string;
  technologies: string[];
}

interface Education {
  year: string;
  degree: string;
  school: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
      this.observeElements();
    }, 100);
  }

  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));
  }
  experiences: Experience[] = [
    {
      year: '2022 - Present',
      role: 'Full Stack Developer',
      company: 'Tech Company',
      technologies: ['Angular', 'ReactJS', '.NET', 'C#', 'PostgreSQL', 'MySQL', 'AzureDB', 'Agentic AI', 'Postman', 'TypeScript', 'REST APIs', 'API Testing', 'DATA MODERNIZATION/MIGRATION' ]
    },
    {
      year: '2020 - 2021',
      role: 'Freelance Developer',
      company: 'Self-Employed',
      technologies: ['SEO', 'WordPress', 'HTML', 'CSS', 'JavaScript', 'React']
    }
  ];

  education: Education[] = [
    {
      year: '2015 - 2020',
      degree: 'Bachelor of Science in Computer Engineering',
      school: 'University of Cebu - Main Campus'
    }
  ];
}
