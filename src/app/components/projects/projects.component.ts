import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
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
      title: 'My Portfolio',
      description: 'Louie\'s Portfolio is a clean, modern showcase of my web development journey — featuring my skills in Angular, .NET C#, and PostgreSQL, as well as my real projects and experience. Explore interactive demos, code samples, and my latest work, and feel free to connect with me for collaboration or hiring.',
      technologies: ['Angular', 'TypeScript', 'Material UI'],
      icon: 'photo_library',
      liveUrl: 'https://iamlouie.github.io/my-portfolio/'
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
}
