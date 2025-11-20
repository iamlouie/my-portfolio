import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'LOUIE NUEZ';
  title = 'Full Stack Developer';
  description = 'Passionate about creating beautiful, functional web applications that make a difference.';

  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  skillCategories = [
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

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform CabzGo is an all-in-one delivery and shopping platform where you can order food, buy items from local stores, and get everything delivered and admin dashboard.',
      technologies: ['Angular', 'Firebase', 'Firestore', 'TypeScript'],
      icon: 'shopping_cart',
      liveUrl: 'https://cabzgo.shop'
    },
    {
      title: 'Disaster Response Platform',
      description: 'RescueLink PH Dashboard is your central hub for managing disaster response and rescue operations across the Philippines. Access real-time incident reports, coordinate with rescue teams, and track resource deployment — all in one unified platform designed to help first responders act fast and save lives.',
      technologies: ['Angular', 'Firebase', 'Material-UI', 'TypeScript', 'WebSocket', 'PWA'],
      icon: 'emergency',
      liveUrl: 'https://rescuelinkph.online/'
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for photographers and artists to showcase their work beautifully.',
      technologies: ['Next.js', 'PostgreSQL', 'AWS S3', 'Tailwind', 'TypeScript'],
      icon: 'photo_library'
    },
    {
      title: 'Municipal Services Portal',
      description: 'A user-friendly web app that serves as a central hub for municipal services and public information. Whether you\'re a resident or a business, you can explore local news, access government forms, browse community resources, and stay updated on city events — all in one easy-to-navigate platform.',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Material-UI'],
      icon: 'account_balance',
      liveUrl: 'https://iamlouie.github.io/sjmunicipal-portal/'
    },
    {
      title: 'Social Media App',
      description: 'Social networking platform with posts, comments, likes, and real-time messaging.',
      technologies: ['React', 'Node.js', 'Socket.io', 'Redis'],
      icon: 'forum'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-friendly fitness tracking application with workout plans and progress monitoring.',
      technologies: ['Angular', 'PWA', 'Chart.js', 'Firebase'],
      icon: 'fitness_center'
    }
  ];

  onSubmitContact(event: Event) {
    event.preventDefault();
    
    const subject = encodeURIComponent(`Portfolio Contact from ${this.contactForm.name}`);
    const body = encodeURIComponent(`Name: ${this.contactForm.name}\nEmail: ${this.contactForm.email}\n\nMessage:\n${this.contactForm.message}`);
    const mailtoLink = `mailto:iamlouienuez@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }
}
