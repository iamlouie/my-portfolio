import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: 'web',
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'WordPress']
    },
    {
      name: 'Backend',
      icon: 'dns',
      skills: ['Node.js', '.NET', 'C#', 'REST APIs', 'GraphQL']
    },
    {
      name: 'Database',
      icon: 'storage',
      skills: ['AzureDB', 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
      name: 'AI Tools',
      icon: 'psychology',
      skills: ['ChatGPT', 'GitHub Copilot', 'Claude AI', 'Gemini', 'Cursor AI']
    },
    {
      name: 'Tools & Others',
      icon: 'build',
      skills: ['Git', 'Okta', 'AWS', 'CI/CD', 'Agile', 'Commerce Tools', 'Grafana', 'ServiceNow', 'Salesforce', 'Zuora', 'Jira','SEO']
    }
  ];
}
